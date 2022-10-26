import React from 'react'
import Image from 'next/image'
import styles from './home.module.css'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const HomeImage = () => {
  return (

      <div className={styles.imagen}>
          <Box sx={{ width: '100%', maxWidth: 500, position:'absolute', top:'10%',left:'50px' }}>
              <Typography variant="h3" gutterBottom sx={{color:'#ffff'}}>
                  De ahora en adelante, hacés más con tu dinero
              </Typography>
              <Typography variant="h4" gutterBottom sx={{ color:'#C1FD35' }}>
                  Tu nueva billetera virtual
              </Typography>
          </Box>
          <div className={styles.service}>

          </div>
     </div>

/*     <div className=''>
         <Image src="/pexels-co.png"/>
    </div> */

  )
}

export default HomeImage;