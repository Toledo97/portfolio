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
            <b>About Me! </b><hr></hr>
          </div>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <p className={"indent-5"}>
            I am a first generation college graduate with a BS in Computer Engineering. I am of Mexican and Puerto Rican descent and I was born and raised in Elgin, Illinois.
            Professionally, my interests align with Full Stack Development and even more so Backend Development. I enjoy a challenge with a meaningful impact, I want my work to help people.
          </p>

          <p className={"indent-5"}>
            I initially was interested in computer hardware development in my studies, but my first internships quickly changed my mind and I now enjoy software development a lot more. My favorite course I have taken
            was my Database Systems course where we made a web-application to display Youtube data from Kaggle.
          </p>
          </Typography>
        </Box>
    </div>
  );
}