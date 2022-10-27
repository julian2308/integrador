import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import logo2 from '../../../public/logoParte1.png';
import logo1 from '../../../public/logoParte2.png';
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
      <Box sx={{ display: 'flex', height:'5vh'}}>
          <AppBar component="nav">
              <Toolbar sx={{ backgroundColor: '#000', color: '#C1FD35', fontSize: '14px' }}>

                  <Box component="div"
                      sx={{ flexGrow: 1 }} >
                     <Image src={logo1} />  
                     <Image src={logo2} />
                  </Box>
               
                  <Box >

                      <Button
                          sx={{
                              color: "#C1FD35",
                              background: "#201F22",
                              border: "0.5px solid #C1FD35",
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
                          sx={{
                              color: "#000000",
                              background: "#C1FD35",
                              marginRight: "10px",
                              "&.MuiButtonBase-root:hover": {
                                  background: "#272727",
                                  border: "0.5px solid #C1FD35",
                                  color: "#C1FD35",
                              },
                          }}
                          onClick={onClickRegister}>
                          Crear cuenta
                      </Button>

                  </Box>
              </Toolbar>
          </AppBar>

      </Box>
   
  );
};

export default GeneralHeader;
