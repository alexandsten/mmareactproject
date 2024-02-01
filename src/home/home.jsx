import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', width:'100%', marginTop: '25px'}}>
        <Typography sx={{ fontSize: '18px', fontWeight: 'semiBold'}} >
            Welcome to the page of an upcoming...
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', width:'100%', marginTop: '25px'}}>
        <Typography sx={{ fontSize: '18px', fontWeight: 'semiBold'}} >
            What our goal is to offer...
        </Typography>
      </Box>
    </>
  )
}
