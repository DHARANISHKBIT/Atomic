import React, { useState } from 'react';
import { Box, Stack, TextField, Typography, Drawer, IconButton, Select, MenuItem } from '@mui/material';
import HedStyle from './Heastyle';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Filter from '../Filter/Filter.jsx'


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [filterr,setfillterr] = useState(false);
 const openfil = (open)  => {
  setfillterr(!filterr);
 }
  const toggleDrawer = (open) => (event) => {
    setDrawerOpen(open);
  };

  return (
    <Box sx={HedStyle}>
      <Typography sx={HedStyle.team}>Team members</Typography>
      <Box sx={HedStyle.rightteam}>
        <Box sx={HedStyle.chek}>
          <Box><Checkbox {...label} defaultChecked sx={HedStyle.box} /></Box>
          <Typography sx={HedStyle.show}>Show only my reportees</Typography>
        </Box>
        <Paper
          component="form"
          sx={{ p: '0px 4px', display: 'flex', alignItems: 'center', width: 350, border: '1px solid #CACACA' }}
        >
          <IconButton sx={{ p: '10px' }} aria-label="menu">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search by name, email"
            inputProps={{ 'aria-label': 'search by name, email' }}
          />
        </Paper>
        <IconButton sx={HedStyle.icbut} onClick={openfil}><FilterAltOutlinedIcon /></IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Stack direction="row" spacing={3}>
          <Button variant="outlined" startIcon={<PictureAsPdfOutlinedIcon />} sx={HedStyle.import}>
            Import
          </Button>
        </Stack>
        <Stack spacing={2} direction="row">
          <Button variant="contained" sx={HedStyle.add} onClick={toggleDrawer(true)}>Add member</Button>
        </Stack>
      </Box>


      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 350, p: 2,height:'90%' }}
          role="presentation"
    >
        <Box sx={HedStyle.log}>
            <Box sx={HedStyle.title}>Add member</Box>
         
          <Box sx={HedStyle.allinput}>
            <Box sx={HedStyle.nameinputs}>
              <Box sx={HedStyle.nameasterisk}>
                <Box>Name</Box>
                <Box sx={HedStyle.asterisk}>*</Box>
              </Box>
              <TextField
                name="name"
                placeholder="Type name"
                sx={HedStyle.inputs}
                inputProps={{
                  style: { ...HedStyle.inputsvaluefonts },
                }}
              />
            </Box>
            <Box sx={HedStyle.nameinputs}>
              <Box sx={HedStyle.nameasterisk}>
                <Box>Email</Box>
                <Box sx={HedStyle.asterisk}>*</Box>
              </Box>
              <TextField
                name="email"
                placeholder="Email"
                sx={HedStyle.inputs}
                inputProps={{
                  style: { ...HedStyle.inputsvaluefonts },
                }}
              />
            </Box>

            <Box sx={HedStyle.nameinputs}>
              <Box sx={HedStyle.nameasterisk}>
                <Box>Date of joining</Box>
                <Box sx={HedStyle.asterisk}>*</Box>
              </Box>
              <TextField
                name="date"
                type='date'
                placeholder="Select date"
                sx={{color:'#C2C1C7',...HedStyle.inputs,}}
              
              />
            </Box>
            <Box sx={HedStyle.nameinputs}>
              <Box sx={HedStyle.nameasterisk}>
                <Box>Department</Box>
              </Box>
              <TextField
                name="department"
                placeholder="Select department"
                sx={HedStyle.inputs}
                inputProps={{
                  style: { ...HedStyle.inputsvaluefonts },
                }}
              />
            </Box>
            <Box sx={HedStyle.nameinputs}>
              <Box sx={HedStyle.nameasterisk}>
                <Box>Designation</Box>
                <Box sx={HedStyle.asterisk}>*</Box>
              </Box>
              <FormControl fullWidth size="small">
  <Select
    className="no-border-outline"
    defaultValue={10}
    sx={{ color:'#C2C1C7',
    ...HedStyle.inputsvaluefonts,}}
 >
    <MenuItem value="10" disabled sx={{color:"green"}}>
      Select
    </MenuItem>
    <MenuItem value={10} sx={{ ...HedStyle.sel, color: 'blue' }}>Select designation</MenuItem>
  </Select>
</FormControl>
            </Box>
            <Box sx={HedStyle.nameinputs}>
              <Box sx={HedStyle.nameasterisk}>
                <Box>Role</Box>
                <Box sx={HedStyle.asterisk}>*</Box>
              </Box>
              <FormControl fullWidth size="small">
  <Select
    className="no-border-outline"
    defaultValue={10}
    sx={{ color:'#C2C1C7',
      ...HedStyle.inputsvaluefonts,}}
  >
    <MenuItem value="10" disabled sx={{color:"#C2C1C7"}}>
      Select
    </MenuItem>
    <MenuItem value={10}sx={{color:"#C2C1C7"}} >Select Role</MenuItem>
  </Select>
</FormControl>
            </Box>
            <Box sx={HedStyle.nameinputs}>
              <Box sx={HedStyle.nameasterisk}>
                <Box>Reporting to</Box>
                </Box>
                <FormControl fullWidth size="small">
  <Select
    className="no-border-outline"
    defaultValue={10}
        sx={{ color:'#C2C1C7',
      ...HedStyle.inputsvaluefonts,}}
  >
    <MenuItem value="10" disabled sx={{color:"#C2C1C7"}}>
      Select
    </MenuItem>
    <MenuItem value={10}sx={{color:"#C2C1C7"}} >Select Rep</MenuItem>
  </Select>
</FormControl>

              {/* </Box> */}
            </Box>
            <Box sx={HedStyle.bottomdialogbuttons}>
              <Button
                sx={HedStyle.addmemberconfirm}
                >
                Add member
              </Button>
              <Button
                sx={HedStyle.cancelconfirm}>
                Cancel
              </Button>
            </Box>
          </Box>
        </Box>
        </Box>
      </Drawer>
      <Box sx={{width:'0%'}}>

      <Filter open = {filterr} close ={setfillterr} />
      </Box>
    </Box>
  );
}

export default Header;
