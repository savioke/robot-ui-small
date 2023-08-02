import React from 'react';
import Image from 'next/image';

/** Mui Components */
import { Box, Paper, Typography } from '@mui/material';

/** Components */
import LeftEye from 'public/images/eye_left.svg';
import RightEye from 'public/images/eye_right.svg';

/** redux */

/** helpers */

export default function LoadItem() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Box sx={{ width: '40%', height: '30%', position: 'relative' }}>
          <Paper
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottom: '5px solid white',
              '&::after': {
                content: "''",
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: -9,
                margin: '0 auto',
                width: 0,
                height: 0,
                borderTop: '10px solid white',
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
              },
            }}
            elevation={5}
          >
            <Typography variant='h4'>Choose a program</Typography>
          </Paper>
        </Box>
        <Box sx={{ width: '30%', display: 'flex', justifyContent: 'space-between' }}>
          <Image
            priority
            src={LeftEye}
            height={64}
            width={64}
            alt='Left Eye'
          />
          <Image
            priority
            src={RightEye}
            height={64}
            width={64}
            alt='Right Eye'
          />
        </Box>
      </Box>
    </>
  );
}
