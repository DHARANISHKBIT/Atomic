import { Box } from '@mui/material'
import React from 'react'
import Forget from '../Components/Forgot/Fotgot.jsx'

const style = {
  width:'400px',
  height:'386px',
  backgroundColor:'#FFFFFF',
  borderRadius:'5px'
}

function Forgetpage() {
  return (
    <Box sx={style}>
        <Forget />
    </Box>
  )
}

export default Forgetpage
