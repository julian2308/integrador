import * as React from 'react';
import { FC, PropsWithChildren } from "react";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import GeneralHeader from './general/general-header';
import GeneralFooter from './general/general-footer';

const LayoutGeneral: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {

    return (<>
        <Stack direction={"column"} height={'100%'}>
            <GeneralHeader />
            <Box display={'flex'} flexGrow={1} justifyContent={'center'} bgcolor="#272727">
                {children}
            </Box>
            <GeneralFooter />
        </Stack>
    </>
    );
};
export default LayoutGeneral;
