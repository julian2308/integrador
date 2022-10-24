import axios from "axios";
import {
  dataLoginType,
  FormPasswordType,
} from "grupo-04/components/login/login.type";

const endpoint = "http://digitalmoney.ctd.academy/api/";

const login = async (data: any) => {
  const response = axios
    .post(`${endpoint}login`, {
      body: JSON.stringify(data),
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
