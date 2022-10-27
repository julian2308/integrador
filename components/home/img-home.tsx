import React from 'react'
import Image from 'next/image'
import styles from './home.module.css'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
/* import styled from 'styled-components'; */
import { styled } from '@mui/system';

/* const Space = styled.('div')`
   height:1px;
   width:100px;
   backgroundColor:#C1FD35;
`; */
const Space = styled('div')({
    height: 2,
    width: '100%',
    backgroundColor: '#C1FD35', 
    margin: '10px 0'
   
});



const HomeImage = () => {
  return (

      <div className={styles.imagen}>
          <Box sx={{ width: '100%',
                     maxWidth: 500,
                     px:'2%',  
                     py:'3%'}}>
              <Typography variant="h3" gutterBottom sx={{color:'#ffff'}}>
                  De ahora en adelante, hacés más con tu dinero
              </Typography>
          
              <Typography variant="h4" gutterBottom sx={{ color:'#C1FD35' }}>
                  Tu nueva billetera virtual
              </Typography>
          </Box>
          <div className={styles.service}></div>
          <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                    position: 'absolute',
                    bottom: '10%',  
                    width:' 100%'        
                }}>
              <Box sx={{
                  bgcolor: '#ffffff',
                  borderRadius: 3,
                  width: '40%',
                  padding:3
                  }}>
                  <Typography variant="h4">Transferí dinero </Typography>
                  <Space />
                  <Typography>Desde Digital Money House vas a poder transferir dinero a otras cuentas, asi como también recibir transferencias y nuclear tu capital en nuestra billetera virtual</Typography>
              </Box>
           
              <Box sx={{
                  bgcolor: '#ffffff',
                  borderRadius: 3,
                  width: '40%',
                  padding: 3
                  }}>
                  <Typography variant="h4" >Pago de servicios</Typography>
                  <Space />
                  <Typography>Pagá mensualmente los servicios en 3 simples clicks. Facil, rápido y conveniente. Olvidate de las facturas en papel</Typography>
              </Box>
          </Box>
          
          
     </div> 

/*     <div className=''>
         <Image src="/pexels-co.png"/>
    </div> */

  )
}

export default HomeImage;