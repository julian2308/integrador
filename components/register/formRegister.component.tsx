import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import InputText from "../InputText/InputText";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormRegisterType,
  regexOnlyNumbers,
  ValidationSchemaRegister,
} from "./regiterSchema";

const FormRegister = () => {
  const methods = useForm<FormRegisterType>({
    resolver: yupResolver(ValidationSchemaRegister),
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
  const { handleSubmit } = methods;

  const onSubmit = (data: FormRegisterType) => {
    console.log(data);
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
            <InputText name="phone" label="Télefono*" />
            <Button onClick={handleSubmit(onSubmit)} variant="contained">
              Continuar
            </Button>
          </FormProvider>
        </form>
      </Box>
    </>
  );
};

export default FormRegister;
