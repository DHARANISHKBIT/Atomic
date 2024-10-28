import { Box } from '@mui/material'
import React from 'react'
import Header from '../Header/Header.jsx'
import Main from '../Mainpage/Main.jsx'

const fullstyle = {
  width: '100%',
  height: '100%',
  backgroundColor:'#F0F0F0',
  header: {
    width: '100%',
    height: '10%',
    display:'flex',
    alignItems:'center'
  },
  main: {
    width: '98%',
    height: '88%',
    display: 'flex',
    alignItems: 'center',  
    justifyContent: 'center',
    padding:'0 1%'
  }
}

function Full() {
  return (
    <Box sx={fullstyle}>
      <Box sx={fullstyle.header}>
      <Header />
      </Box>
      <Box sx={fullstyle.main}>
      <Main />
      </Box>
    </Box>
  )
}

export default Full
