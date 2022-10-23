import axios from "axios";
import {
  FormPasswordType,
} from "grupo-04/components/login/login.type";

const endpoint = "http://digitalmoney.ctd.academy/api/";

const login = async (email: string, password: FormPasswordType) => {
  const response = axios
    .post(`${endpoint}login`, {
      email, password,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });

  return await response;
};

export const loginService = {
  login,
};
