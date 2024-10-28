import React, { useState } from 'react';
import Forstyle from './Forgetstyle.jsx';
import { Box, TextField, Typography } from '@mui/material';
import atomic from '../../assets/atomic.png';
import Muiboxs from '../Muibox.jsx';
import { useNavigate } from 'react-router-dom';

function Forgot() {
  const navigate = useNavigate();

  const handleGetLinkClick = () => {
    navigate("/reset", { state: { showAlert: true } });
  };

  return (
    <Box sx={Forstyle}>
      <img src={atomic} alt="Atomic" style={Forstyle.atomic} />
      <Typography sx={Forstyle.type}>Forgot Password</Typography>
      <Typography sx={Forstyle.para}>
        Provide us the registered email to reset your password.
      </Typography>
      <Box sx={Forstyle.entermail}>
        <Typography sx={Forstyle.smail}>Email</Typography>
        <TextField type='text' placeholder='atomicsignals@gmail.com' sx={Forstyle.inputbox} />
      </Box>
      <Box sx={Forstyle.muibox} onClick={handleGetLinkClick}>
        <Muiboxs vari="contained" name="Get Link" color="#49C792" />
      </Box>

      <Box sx={Forstyle.allogin}>
        <Typography sx={Forstyle.al}>Remembered the password?</Typography>
        <Typography sx={Forstyle.lo} onClick={() => navigate('/login')}>
          Log in
        </Typography>
      </Box>
    </Box>
  );
}

export default Forgot;
