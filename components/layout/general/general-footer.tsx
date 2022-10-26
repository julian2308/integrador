import * as React from 'react';
import Box from '@mui/material/Box';
import Image from "next/image";
import { Link } from "@mui/material";

const GeneralFooter = () => {
    return (
        <Box component={"footer"} display={'flex'}
            justifyContent={'left'}
            borderTop={'1px solid #eaeaea'}
            sx={{ backgroundColor: '#000', color:'#C1FD35', fontSize:'14px',height:'5vh'  }}>
           @2022 Digital Money 
        </Box>
    );
};
export default GeneralFooter;
