import { Box } from '@mui/material'
import React from 'react'
import Reset from '../Components/Reset/Reset.jsx'

const style ={
  width:'400px',
  height:'415px',
  backgroundColor:'#FFFFFF',
  borderRadius:'5px'
}
function Resetpage() {
  return (
    <Box sx={style}>
        <Reset />
    </Box>
  )
}

export default Resetpage
