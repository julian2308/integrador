import { Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { FC, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import InputText from "../InputText/InputText";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormEmailType, ValidationSchemaEmail } from "./login.type";
import ButtonsForm from "./buttonsForm";

export type formEmailProps = {
  form: number;
  setEmail: (email: string) => void;
  handleNext: (data: FormEmailType) => void;
};

const FormEmail: FC<formEmailProps> = ({ form, setEmail, handleNext }) => {
  const methods = useForm<FormEmailType>({
    resolver: yupResolver(ValidationSchemaEmail),
    defaultValues: {
      email: "",
    },
  });
  const { handleSubmit } = methods;

  const onSubmit = (data: FormEmailType) => {
    handleNext(data);
    setEmail(data.email);
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
          <Typography m={2}>¡Hola! Ingresá tu e-mail</Typography>
          <FormProvider {...methods}>
            <InputText name="email" label="Correo electrónico*" />
            <ButtonsForm form={form} handleNext={handleSubmit(onSubmit)} />
          </FormProvider>
        </form>
      </Box>
    </>
  );
};

export default FormEmail;
