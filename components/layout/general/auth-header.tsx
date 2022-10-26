import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const AuthHeader = () => {
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
              }}>
              Iniciar sesión
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AuthHeader;
