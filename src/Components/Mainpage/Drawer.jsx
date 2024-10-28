import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(true);


  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" >
      
     
    
    </Box>
  );

  return (
    <Box>
      <Drawer anchor="right" open={open} >
        {DrawerList}
      </Drawer>
    </Box>
  );
}
