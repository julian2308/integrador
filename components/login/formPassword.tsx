import { Alert, Box, Typography } from "@mui/material";
import { FC, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import InputText from "../InputText/InputText";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormPasswordType, ValidationSchemaPassword } from "./login.type";
import ButtonsForm from "./buttonsForm";
import { loginService } from "grupo-04/services/Login/login.service";
import { useRouter } from "next/router";

export type formPasswordProps = {
  form: number;
  email: string;
};

const FormPassword: FC<formPasswordProps> = ({ form, email }) => {
  const methods = useForm<FormPasswordType>({
    resolver: yupResolver(ValidationSchemaPassword),
    mode: "all",

    defaultValues: {
      password: "",
    },
  });
  const { handleSubmit } = methods;
  const router = useRouter();
  const [error, setError] = useState<string>("");

  const onSubmit = async (password: any) => {
    setError("");

    const data = {
      email: email,
      password: password.password,
    };

    const user = JSON.stringify(data);
    console.log(user);

    const response = await loginService.login(user);
    if (response.status === 200) {
      router.push("/", undefined, { shallow: true });
    } else if (response.status === 401) {
      setError("Credenciales incorrectas");
    } else {
      setError("Ha ocurrido un error, vuelva a intentarlo.");
    }
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography m={2}>Ingresá tu contraseña</Typography>
          <FormProvider {...methods}>
            <InputText type="password" name="password" label="Contraseña*" />
            <ButtonsForm form={form} handleNext={handleSubmit(onSubmit)} />
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
        </form>
      </Box>
    </>
  );
};

export default FormPassword;
