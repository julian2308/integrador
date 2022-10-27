import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import Image from "next/image";
import logo2 from "../../../public/logoNegro2.png";
import logo1 from "../../../public/logoNegro1.png";
import Link from "next/link";

const AuthHeader = () => {
  const router = useRouter();

  const onClick = () => {
    router.push("/login");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar
          sx={{
            backgroundColor: "primary",
            color: "#201F22",
            fontSize: "14px",
          }}>
           <Link href="/">
            <Box component="div" sx={{ flexGrow: 1, ":hover": { cursor: "pointer" } }}>
              <Image src={logo1} />
              <Image src={logo2} />
            </Box>
          </Link>
          <Box>
            <Button
              sx={{
                color: "#FFFFFF",
                background: "#3A393E",
                "&.MuiButtonBase-root:hover": {
                  background: "#3A393E",
                  color: "#C1FD35",
                },
              }}
              onClick={onClick}>
              Iniciar sesión
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AuthHeader;
