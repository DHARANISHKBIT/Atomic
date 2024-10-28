import React from 'react';
import { Signstyle } from './SingStyle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Boxs from '../Boxs';
import google from '../../assets/google.png';
import mic from '../../assets/mic.png';
import atomic from '../../assets/atomic.png';
import '../../Style/Sign.css';
import Muibox from '../Muibox.jsx';
import { useNavigate } from 'react-router-dom';


function Sign() {
  const navigate = useNavigate()
  return (
    <Box sx={Signstyle.parent}>
      <img src={atomic} alt="Atomic" style={Signstyle.atomic} />
      <Typography sx={Signstyle.type}>Sign up</Typography>
      <Typography sx={Signstyle.para}>
        You're just a few details away from setting up a culture of feedback and a thriving environment
      </Typography>
      <Box sx={Signstyle.googlemic}>
        <Boxs img={google} name="Sign up with Google" />
        <Boxs img={mic} name="Sign up with Outlook" />
      </Box>
      <Box sx={Signstyle.fline}>
        <Box sx={Signstyle.line}></Box>
        <Typography sx={Signstyle.or}>or</Typography>
        <Box sx={Signstyle.line}></Box>
      </Box>
      <Box sx={Signstyle.entermail}>
        <Box sx={{ display: 'flex' }}>
          <Typography sx={Signstyle.smail}>Work Email</Typography>
          <Typography sx={Signstyle.star}>*</Typography>
        </Box>
        <input type="text" placeholder="atomicsignals@gmail.com" className="inputbox" />
      </Box>
      <Box sx={Signstyle.muibox}>
        <Muibox vari="contained" name="Sign up" color="#49C792" />
      </Box>
      <Box sx={
        Signstyle.allogin
      }>
        <Typography sx={Signstyle.al}>Already have an account?</Typography>
        <Typography sx={Signstyle.log} onClick={() => navigate('/login')}>Log in</Typography>
      </Box>
     
    </Box>
  );
}

export default Sign;
