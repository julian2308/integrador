import axios from "axios";

const endpoint = "http://digitalmoney.ctd.academy/api/";

const login = async (user: any) => {
  const response = axios
    .post(`${endpoint}login`, user)
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
