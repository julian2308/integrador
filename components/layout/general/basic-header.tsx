import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import logo2 from "../../../public/logoNegro2.png";
import logo1 from "../../../public/logoNegro1.png";

const BasicHeader = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar
          sx={{
            backgroundColor: "primary",
            color: "#201F22",
            fontSize: "14px",
          }}>
          <Box component="div" sx={{ flexGrow: 1 }}>
            <Image src={logo1} />
            <Image src={logo2} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default BasicHeader;
