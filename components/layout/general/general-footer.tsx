import * as React from 'react';
import Box from '@mui/material/Box';
import Image from "next/image";
import { Link } from "@mui/material";

const GeneralFooter = () => {
    return (
        <Box component={"footer"} display={'flex'} p={'1rem 0'}
            justifyContent={'left'}
            borderTop={'1px solid #eaeaea'}
            sx={{ backgroundColor: '#000', color:'#C1FD35', fontSize:'14px'  }}>
           @2022 Digital Money 
        </Box>
    );
};
export default GeneralFooter;
