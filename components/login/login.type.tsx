import * as yup from "yup";

export const ValidationSchemaEmail = yup.object({
    email: yup.string().email("ingrese un correo valido").required('email requerido'),
}).required(); 

export const ValidationSchemaPassword = yup.object({
    password: yup.string()
    .min(6, "La cantidad mínima de caracteres es 6")
    // .matches(/^(?:(?=.\d)(?=.[a-z])(?=.[A-Z]).)$/, "Debe contener al menos 1 mayúscula, 1 minúscula y 1 número")
    .required("Contraseña requerida"),
}).required();

export type FormEmailType = {
    email: string,
  };

  export type FormPasswordType = {
    password: string,
  };