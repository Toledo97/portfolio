'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 666,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal () {
  return (
    <div>
  
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          <div className='text-center'>
            <b>Conact Me! </b><hr></hr>
          </div>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <b>
            Professional Email:
          </b>
          {' toledojr7@hotmail.com'}
          <br></br>
          <b>
            Personal Email:
          </b>
          {' toledojr7@gmail.com'}
          </Typography>
        </Box>
    </div>
  );
}