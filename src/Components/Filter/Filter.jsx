import React, { useState } from 'react';
import {Drawer,Button,Typography,TextField,Select,MenuItem,FormControl,InputLabel,ToggleButton,ToggleButtonGroup,Box, Stack} from '@mui/material';
import Fstyle from './Fstyle.jsx'
export default function FilterDrawer({open , close}) {
  const [role, setRole] = useState('');

  const toggleDrawer = () => {
    close(!open);
  };

 

  const handleRoleChange = (event, newRole) => {
    setRole(newRole);
  };

  return (
    <Box sx={Fstyle}>
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <Box sx={{ width: 400, p: 2 }}>
          <Typography  gutterBottom sx={Fstyle.fi}>
            Filters
          </Typography>

          <Typography  sx={Fstyle.over}>Overall performance</Typography>
          <Stack spacing={2} direction="row"
            sx={Fstyle.but}
          >
            <Button sx={Fstyle.i} variant="outlined">Impactful</Button>
            <Button sx={Fstyle.i} variant="outlined">Spectacular</Button>
            <Button sx={Fstyle.i} variant="outlined">Very good</Button>
          </Stack>
          <Stack spacing={2} direction="row"
            sx={Fstyle.but}
          >
            <Button  variant="outlined" sx={Fstyle.i} >Good</Button>
            <Button variant="outlined" sx={Fstyle.i} >Need to improve</Button>
            </Stack>

            <Stack spacing={2} direction="row"
            sx={Fstyle.but}
          >
            <Button variant="outlined" sx={Fstyle.i}>Need to improve a lot</Button>
            <Button variant="outlined" sx={Fstyle.i}>Completely away</Button>
            </Stack>
          <FormControl  sx={Fstyle.dep}>
            <Typography sx={Fstyle.depar}>Department</Typography>
            <Select sx={Fstyle.select}>
              <MenuItem value="Select"></MenuItem>
              <MenuItem value="hr">HR</MenuItem>
              <MenuItem value="engineering">Engineering</MenuItem>
              <MenuItem value="sales">Sales</MenuItem>
              {/* Add other departments here */}
            </Select>
          </FormControl>

          <FormControl sx={Fstyle.dep}>
          <Typography sx={Fstyle.depar}>Designation</Typography>
            <Select sx={Fstyle.select}>
              <MenuItem value="developer">Developer</MenuItem>
              <MenuItem value="manager">Manager</MenuItem>
              <MenuItem value="analyst">Analyst</MenuItem>
            </Select>
          </FormControl>
          <Box sx={Fstyle.dep}>
          <Typography sx={Fstyle.depar}>Reporting to</Typography>
          <TextField
            fullWidth
            placeholder="Name"
            variant="outlined"
            sx={Fstyle.input}
          />
          </Box>
      <Box sx={Fstyle.role}>
          <Typography variant="subtitle1">Role</Typography>
          <Stack spacing={2} direction="row"
            sx={Fstyle.but}
          >
            <Button sx={Fstyle.i} variant="outlined">Employee</Button>
            <Button sx={Fstyle.i} variant="outlined">Manager</Button>
            <Button sx={Fstyle.i} variant="outlined">Admin</Button>
          </Stack>
          </Box>

          <Box sx={Fstyle.lastbut}>
            <Button  variant="outlined" sx={Fstyle.app} color='succes'>
              Apply filter
            </Button>
            <Button  variant="outlined" sx={Fstyle.reset}>
              Reset
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
