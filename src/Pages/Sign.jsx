import React from 'react'
import Sign from '../Components/logins/Signcom'
import Welcome from '../Components/Welcome/Welcome'
import { Box } from '@mui/system'

function Signpage
() {
  const style ={
    width:'25%',
    height:'524px',
    backgroundColor:'#FFFFFF',
    borderRadius:'5px'
  }
   return (
    <Box sx={style}>
      <Sign />
    </Box>
  )
}

export default Signpage

