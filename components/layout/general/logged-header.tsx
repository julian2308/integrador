import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import logo2 from "../../../public/logoParte1.png";
import logo1 from "../../../public/logoParte2.png";
import { useRouter } from "next/router";
import Link from "next/link";

const LoggedHeader = () => {
  const router = useRouter();

  return (
    <Box sx={{ display: "flex", height: "5vh" }}>
      <AppBar component="nav">
        <Toolbar
          sx={{
            backgroundColor: "#201F22",
            color: "#C1FD35",
            fontSize: "14px",
          }}>
          <Link href="/">
            <Box component="div" sx={{ flexGrow: 1, ":hover": { cursor: "pointer" } }}>
              <Image src={logo1} />
              <Image src={logo2} />
            </Box>
          </Link>    
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default LoggedHeader;
