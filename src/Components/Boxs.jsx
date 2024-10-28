import { Box, Typography } from '@mui/material'
import React from 'react'
import Boxstyle from './Boxstyle.jsx'
function Boxs(props) {
  return (
    <Box sx={Boxstyle}>
      <img src={props?.img}/>
      <Typography sx={Boxstyle.proname}>{props?.name}</Typography>
    </Box>
  )
}

export default Boxs
