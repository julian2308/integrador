import * as yup from "yup";

export const ValidationSchemaEmail = yup
  .object({
    email: yup
      .string()
      .email("Ingrese un correo valido")
      .required("Email requerido"),
  })
  .required();

export const ValidationSchemaPassword = yup
  .object({
    password: yup.string().required("Contraseña requerida"),
  })
  .required();

export type FormEmailType = {
  email: string;
};

export type FormPasswordType = {
  password: string;
};

export type dataLoginType = {
  email: string;
  password: string;
};
