import { Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import InputText from "../InputText/InputText";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormPasswordType, ValidationSchemaPassword } from "./login.type";
import ButtonsForm from "./buttonsForm";

export type formPasswordProps = {
  form: number;
  email: string;
};

const FormPassword: FC<formPasswordProps> = ({ form, email }) => {
  const methods = useForm<FormPasswordType>({
    resolver: yupResolver(ValidationSchemaPassword),
    defaultValues: {
      password: "",
    },
  });
  const { handleSubmit } = methods;

  const onSubmit = (data: FormPasswordType) => {
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
            <InputText type="password" name="password" />
            <ButtonsForm form={form} handleNext={handleSubmit(onSubmit)} />
          </FormProvider>
        </form>
      </Box>
    </>
  );
};

export default FormPassword;
