import * as yup from "yup";
import { errorMessages } from "./errorMesages";

export const regexOnlyNumbers = /^[0-9]*$/gm;
export const regexOnlyLetters = /^[a-zA-Z]*$/gm;
export const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

export const ValidationSchemaRegister = yup
  .object({
    dni: yup
      .string()
      .matches(regexOnlyNumbers, errorMessages.dni.format)
      .required(errorMessages.requiredField),
    email: yup
      .string()
      .email(errorMessages.email.format)
      .required(errorMessages.requiredField),
    firstname: yup
      .string()
      .required(errorMessages.requiredField)
      .matches(regexOnlyLetters, errorMessages.firstname.format),
    lastname: yup
      .string()
      .required(errorMessages.requiredField)
      .matches(regexOnlyLetters, errorMessages.lastname.format),
    password: yup
      .string()
      .required(errorMessages.requiredField)
      .min(6, errorMessages.password.min)
      .max(20, errorMessages.password.max)
      .matches(regexPassword, errorMessages.password.format),
    passwordVerification: yup
      .string()
      .oneOf([yup.ref("password")], errorMessages.passwordVerification.format)
      .required(errorMessages.requiredField),
    phone: yup
      .string()
      .matches(regexOnlyNumbers, errorMessages.phone.format)
      .required(errorMessages.requiredField),
  })
  .required();

export type FormRegisterType = {
  dni: string;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  passwordVerification: string;
  phone: string;
};
