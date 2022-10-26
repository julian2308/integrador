import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

const AuthHeader = () => {
  const router = useRouter();

  const onClick = () => {
    router.push("/login")
  }

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar
          sx={{
            backgroundColor: "primary",
            color: "#201F22",
            fontSize: "14px",
          }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MUI
          </Typography>
          <Box>
            <Button
              sx={{
                color: "#FFFFFF",
                background: "#3A393E",
              }}
              onClick={onClick}
              >
              Iniciar sesión
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AuthHeader;
