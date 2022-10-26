import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

const GeneralHeader = () => {
  const router = useRouter();
  const onClickLogin = () => {
    router.push("/login");
  };

  const onClickRegister = () => {
    router.push("/register");
  };
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar
          sx={{ backgroundColor: "#201F22", color: "#C1FD35", fontSize: "14px" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MUI
          </Typography>
          <Box>
            <Button
              variant="outlined"
              sx={{
                color: "#C1FD35",
                border: "1px solid #C1FD35",
                marginRight: "10px",
                "&.MuiButtonBase-root:hover": {
                  background: "#C1FD35",
                  color: "#000000",
                },
              }}
              onClick={onClickLogin}>
              ingresar
            </Button>

            <Button
              variant="outlined"
              sx={{
                color: "#C1FD35",
                border: "1px solid #C1FD35",
                marginRight: "10px",
                "&.MuiButtonBase-root:hover": {
                  background: "#C1FD35",
                  color: "#000000",
                },
              }}
              onClick={onClickRegister}>
              Crear cuenta
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* <Box component="main" >
              <Toolbar />
          </Box> */}
    </Box>
  );
};

export default GeneralHeader;
