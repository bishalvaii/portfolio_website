// components/Header.tsx

import React from 'react';

import { AppBar, Toolbar, Typography, Button } from '@mui/material';

import Link from 'next/link'
import { Box } from '@mui/system';

const Header = () => {
  

  return (
    <AppBar position="static" sx={{ bgcolor: '#e5de00', color: 'black'}}>
      <Toolbar>
        <div style={{flexGrow: 1}}>
          <Link href="/" passHref>
            <Typography variant="h6" >
              DevBishal
            </Typography>
          </Link>
        </div>
        <nav style={{ flexGrow: 2}}>
            <Box sx={{display: 'flex' ,justifyContent: 'centre', gap: 4, ml: 10, }}>
          <Link href="/about">
            <Button color='inherit' sx={{textTransform: 'none', fontSize: 18}} >About</Button>
          </Link>
          <Link href="/projects">
            <Button color="inherit" sx={{textTransform: 'none',fontSize: 18}}>Projects</Button>
          </Link>
          <Link href="/skills">
            <Button color="inherit" sx={{textTransform: 'none',fontSize: 18}}>Skills</Button>
          </Link>
          <Link href="/resume">
            <Button color="inherit" sx={{textTransform: 'none',fontSize: 18}}>Resume</Button>
          </Link>
          </Box>
        </nav>
        <div>
        <Button color="inherit"  sx={{
              bgcolor: '#f7f5bc',
              borderRadius: '20px', // Set border radius to make it rounded
              px: 4, // Horizontal padding
              py: 1, // Vertical padding
              '&:hover': {
                bgcolor: '#e47200', // Change color on hover
              },
              textTransform: 'none',
              fontSize: 18
            }}>Hire Me</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
