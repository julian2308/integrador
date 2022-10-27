import * as React from 'react';
import Box from '@mui/material/Box';
import Image from "next/image";
import { Link } from "@mui/material";

const GeneralFooter = () => {
    return (
        <Box component={"footer"} display={'flex'}
            justifyContent={'left'}
           sx={{ backgroundColor: '#3A393E', color:'#C1FD35', fontSize:'14px',height:'7vh', paddingLeft:'15px', paddingTop:'10px'}}>
           @2022 Digital Money 
        </Box>
    );
};
export default GeneralFooter;
