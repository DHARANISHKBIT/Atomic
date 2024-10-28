import React, { useEffect, useState } from 'react';
import { Alert, Box, IconButton, TextField, Typography } from '@mui/material';
import Resetstyle from './Resetstyle';
import atomic from '../../assets/atomic.png';
import Muibox from '../Muibox.jsx';
import { useLocation, useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

function Reset() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
  if (location.state && location.state.showAlert) {
      setShowAlert(true);
    }
  }, [location.state]);

  const Resetclick = () => {
    navigate("/login",{state:{alert:true}})
  }
  return (
    <Box sx={Resetstyle}>
      <img src={atomic} alt="Atomic" style={Resetstyle.atomic} />
      <Typography sx={Resetstyle.type}>Reset Password</Typography>
      <Typography sx={Resetstyle.para}>
        Please provide a new password for your account
      </Typography>
      <Box sx={Resetstyle.entermail}>
        <Box sx={{ display: 'flex' }}>
          <Typography sx={Resetstyle.smail}>New password</Typography>
          <Typography sx={Resetstyle.star}>*</Typography>
        </Box>
        <TextField type="password" placeholder="" sx={Resetstyle.inputbox} />
      </Box>

      {showAlert && (
        <Alert
          sx={{ position: 'absolute', top: '10px' }}
          // icon={<CloseIcon fontSize="inherit" />}
          // severity="success"
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={() => setShowAlert(false)}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        >
          Link sent to registered email
        </Alert>
      )}

      <Box sx={Resetstyle.entermail}>
        <Box sx={{ display: 'flex' }}>
          <Typography sx={Resetstyle.smail}>Confirm new password</Typography>
          <Typography sx={Resetstyle.star}>*</Typography>
        </Box>
        <TextField type="password" placeholder="" sx={Resetstyle.inputbox} />
      </Box>
      <Box sx={Resetstyle.muibox} onClick={Resetclick}>
        <Muibox vari="contained" name="Reset password" color="#49C792" />
      </Box>
    </Box>
  );
}

export default Reset;
