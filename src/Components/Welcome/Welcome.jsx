import React, { useEffect, useState } from 'react';
import Welstyle from './Welstyle';
import Box from '@mui/material/Box';
import atomic from '../../assets/atomic.png';
import { Alert, IconButton, TextField, Typography } from '@mui/material';
import Muibox from '../Muibox.jsx'
import { useLocation, useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

function Welcome() {
  const navigate = useNavigate()
  const location = useLocation();
  const [alert,setalert] = useState(false);
  useEffect(() => {
    if(location.state && location.state.alert)
    {
      setalert(true);
    }
  },[location.state])
  return (
    <Box sx={Welstyle}>
      <img src={atomic} alt="Atomic" style={Welstyle.atomic} />
      <Typography sx={Welstyle.type}>Welcome !</Typography>
      <Typography sx={Welstyle.para}>
      One positive feedback per day or week can make us grow exponentially
      </Typography>
      
      <Box sx={Welstyle.allinput}>
      <Box sx={Welstyle.entermail}>
        <Typography  sx={Welstyle.smail}>Email</Typography>
        <TextField type='text' placeholder='atomicsignals@gmail.com' sx={Welstyle.inputbox}/>
      </Box>
      <Box sx={Welstyle.entermail}>
        <Typography  sx={Welstyle.smail}>Password</Typography>
        <TextField type='password' placeholder=''sx={Welstyle.inputbox}/>
      </Box>
      </Box>
      <Typography sx={Welstyle.forget} onClick={()=>navigate('/forget')}>Forgot Password?</Typography>
    <Box sx={
        Welstyle.muibox} onClick={()=> navigate("/main")}>
        <Muibox vari="contained" name="Log In" color="#49C792"/>
    </Box>
    {alert && (
        <Alert
          sx={{ position: 'absolute', top: '10px' }}
          // icon={<CloseIcon fontSize="inherit" />}
          // severity="success"
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={() => setalert(false)}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        >
         Password reset successful
        </Alert>
      )}
    </Box>
  );
}

export default Welcome;
