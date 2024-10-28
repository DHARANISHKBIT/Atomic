import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Muiboxs from './MUIstyle';

export default function BasicButtons(props) {
  return (
    <Box sx={Muiboxs}>
      <Stack spacing={2} direction="row" sx={{width:'100%'}}>
        <Button variant={props?.vari} sx={Muiboxs.vari}>
          {props?.name}
        </Button>
      </Stack>
    </Box>
  );
}
