import { Box } from '@mui/material'
import React from 'react'
import Welcome from '../Components/Welcome/Welcome'

const style ={
  width:'400px',
  height:'445px',
  backgroundColor:'#FFFFFF',
  borderRadius:'5px'
}
function Welcomepage() {
  return (

      <Box sx={style}>
      <Welcome />
    </Box>
  )
}

export default Welcomepage
