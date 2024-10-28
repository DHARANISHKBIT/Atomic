import { Box } from '@mui/material'
import React from 'react'
import Sidebar from '../Components/Sidebar.jsx/Sidebar'
import Full from '../Components/Full/Full'
const full ={
    height:'100%',
    width:'100%',
    display:'flex',
    side:{
        height:'100%',
        width:'72px',
    },
    f:{
        height:"100%",
        width:'95%',
    }

}
function Fullpage() {
  return (
    <Box sx={full}>
        <Box sx={full.side}>
        <Sidebar />
        </Box>
        <Box sx={full.f}>
    <Full />
        </Box>
    </Box>
  )
}

export default Fullpage
