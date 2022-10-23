import axios from "axios";
import { FormRegisterType } from "grupo-04/components/register/regiterSchema";

const endpoint = "http://digitalmoney.ctd.academy/api/";

const register = async (dataRegister: FormRegisterType) => {
  const response = axios
    .post(`${endpoint}users`, {
      ...dataRegister,
      dni: parseInt(dataRegister.dni),
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

export const userService = {
  register,
};
