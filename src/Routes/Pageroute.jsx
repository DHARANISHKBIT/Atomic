import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import Sign from '../Pages/Sign.jsx';
import Welcome from '../Pages/Welcomepage.jsx';
import Forgetpage from '../Pages/Forgetpage.jsx';
import Resetpage from '../Pages/Resetpage.jsx';
import Fullpage from '../Pages/Fullpage.jsx'

function Pageroute() {
  return (
    <Box sx={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Sign />} />
          <Route path='/login' element={<Welcome />} />
          <Route path='/forget' element={<Forgetpage />} />
          <Route path='/reset' element={<Resetpage />} />
          <Route path='/main' element={<Fullpage />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default Pageroute;
