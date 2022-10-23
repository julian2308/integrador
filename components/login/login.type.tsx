import * as yup from "yup";

export const ValidationSchemaEmail = yup.object({
    email: yup.string().email("Ingrese un correo valido").required('Email requerido'),
}).required(); 

export const ValidationSchemaPassword = yup.object({
    password: yup.string()
    .min(6, "La cantidad mínima de caracteres es 6")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, "Debe contener al menos 1 mayúscula, 1 minúscula y 1 número")
    .required("Contraseña requerida"),
}).required();

export type FormEmailType = {
    email: string,
  };

  export type FormPasswordType = {
    password: string,
  };

  export type dataLoginType ={
    email: string,
    password: string,
  }