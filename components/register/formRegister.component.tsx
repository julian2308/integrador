import { Alert, Box, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import InputText from "../InputText/InputText";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormRegisterType,
  regexOnlyNumbers,
  ValidationSchemaRegister,
} from "./regiterSchema";
import { useRouter } from "next/router";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import { authService } from "grupo-04/services/auth.service.";

const FormRegister = () => {
  const methods = useForm<FormRegisterType>({
    resolver: yupResolver(ValidationSchemaRegister),
    mode: "all",

    defaultValues: {
      dni: "",
      email: "",
      firstname: "",
      lastname: "",
      password: "",
      passwordVerification: "",
      phone: "",
    },
  });
  const { formState, handleSubmit } = methods;
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const { isSubmitting } = formState;

  const onSubmit = async (data: FormRegisterType) => {
    setError("");

    const response = await authService.register(data);

    if (response.status === 201) {
      router.push("/registro-exitoso", undefined, { shallow: true });
    } else if (response.response.status === 409) {
      setError("El email ingresado ya está registrado.");
    } else {
      setError("Ha ocurrido un error, vuelva a intentarlo.");
    }
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100%">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography
            m={5}
            textAlign="center"
            variant="h5"
            fontWeight={500}
            color="#FFFFFF">
            Crear cuenta
          </Typography>
          <FormProvider {...methods}>
            <Box
              display="grid"
              gridTemplateColumns={{ sm: "repeat(2, 1fr)" }}
              columnGap={2}
              rowGap={0}
              width={{ xs: 300, sm: 580, md: 750 }}>
              <InputText name="firstname" label="Nombre*" />
              <InputText name="lastname" label="Apellido*" />
              <InputText name="dni" label="DNI*" regex={regexOnlyNumbers} />
              <InputText name="email" label="Correo electrónico*" />
              <InputText type="password" name="password" label="Contraseña*" />
              <InputText
                type="password"
                name="passwordVerification"
                label="Confirmar contraseña*"
              />
              <InputText
                name="phone"
                label="Télefono*"
                regex={regexOnlyNumbers}
              />
              <LoadingButton
                loading={isSubmitting}
                onClick={handleSubmit(onSubmit)}
                variant="contained"
                sx={{ height: "56px", marginTop: "5px" }}>
                Crear cuenta
              </LoadingButton>
            </Box>
          </FormProvider>
        </form>
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
    </>
  );
};

export default FormRegister;
