import { Alert, Box, Stack, Typography } from "@mui/material";
import { FC, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import InputText from "../InputText/InputText";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormVerificationType, ValidationSchemaCode } from "./login.type";
import { useRouter } from "next/router";
import LoadingButton from "@mui/lab/LoadingButton";

const FormVerification: FC = () => {
  const methods = useForm<FormVerificationType>({
    resolver: yupResolver(ValidationSchemaCode),
    mode: "all",
    defaultValues: {
      code: "",
    },
  });
  const { formState, handleSubmit } = methods;
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const { isSubmitting } = formState;

  const onSubmit = async (code: FormVerificationType) => {
    setError("");

    if (code.code === "123456789") {
      router.push("/", undefined, { shallow: true });
    } else {
      setError("Código incorrecto");
    }    
  };

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/home", undefined, { shallow: true });
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100%">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box width={{ xs: 300, sm: 350, md: 400 }}>
            <Typography
              my={5}
              textAlign="center"
              variant="h5"
              width="100%"
              color="#FFFFFF"
              fontWeight={500}>
              Ingresá el código de verificación
            </Typography>
            <FormProvider {...methods}>
              <InputText
                type="password"
                name="code"
                label="Código de verificación*"
              />
              <Stack spacing={2} direction="column">
                <LoadingButton
                  loading={isSubmitting}
                  onClick={handleSubmit(onSubmit)}
                  variant="contained"
                  sx={{ height: "50px" }}>
                  Continuar
                </LoadingButton>
              </Stack>
            </FormProvider>
            {error !== "" && (
              <Alert
                severity="error"
                sx={{
                  marginTop: "30px",
                }}>
                {error}
              </Alert>
            )}
          </Box>
        </form>
      </Box>
    </>
  );
};

export default FormVerification;
