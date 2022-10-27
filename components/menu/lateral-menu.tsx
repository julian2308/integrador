import React from "react";
import { Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";

const LateralMenu = () => {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    router.reload();
  };
  return (
    <Stack sx={{ height: "100%", width: "100%" }}>
      <Stack
        sx={{
          height: "100%",
          width: "300px",
          backgroundColor: "#C1FD35",
          padding: "60px 30px",
        }}>
        <Typography
          mb="10px"
          variant="h6"
          color={"black"}
          sx={{ ":hover": { cursor: "pointer" } }}
          onClick={() => <></>}>
          Inicio
        </Typography>
        <Typography
          mb="10px"
          variant="h6"
          color={"black"}
          sx={{ ":hover": { cursor: "pointer" } }}
          onClick={() => <></>}>
          Actividad
        </Typography>
        <Typography
          mb="10px"
          variant="h6"
          color={"black"}
          sx={{ ":hover": { cursor: "pointer" } }}
          onClick={() => <></>}>
          Tu perfil
        </Typography>
        <Typography
          mb="10px"
          variant="h6"
          color={"black"}
          sx={{ ":hover": { cursor: "pointer" } }}
          onClick={() => <></>}>
          Cargar dinero
        </Typography>
        <Typography
          mb="10px"
          variant="h6"
          color={"black"}
          sx={{ ":hover": { cursor: "pointer" } }}
          onClick={() => <></>}>
          Pagar servicios
        </Typography>
        <Typography
          mb="10px"
          variant="h6"
          color={"black"}
          sx={{ ":hover": { cursor: "pointer" } }}
          onClick={() => <></>}>
          Tarjetas
        </Typography>
        <Typography
          mb="10px"
          variant="h6"
          color={"black"}
          sx={{ ":hover": { cursor: "pointer" } }}
          onClick={() => logout()}>
          Cerrar Sesión
        </Typography>
      </Stack>
    </Stack>
  );
};

export default LateralMenu;
