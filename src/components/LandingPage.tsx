
import React from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';

const LandingPage: React.FC = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6} sx={{ padding: '2rem' }}>
        <Typography sx={{mt: 2}}variant="h3" gutterBottom >
          Welcome! <br /> I am <span style={{ color: '#e5de00' }}>Bishal Adhikari,</span><br /> a Fullstack Developer
        </Typography>
        <Typography variant="body1" gutterBottom sx={{mt: 2, fontFamily: 'Poppins', fontSize: 18}}>
            Passionate full-stack developer with expertise in building scalable web applications and mobile applications. Proficient in both front-end and back-end technologies,
             I specialize in crafting elegant solutions that deliver seamless user experiences    
     </Typography>
     <Box sx={{mt: 4}}>
        <Button variant="contained" color="primary" sx={{textTransform: 'none', fontSize: 18, bgcolor: "#f7f5bc", color: 'black'}}>
          View my works
        </Button>
    
        <Button variant="contained" color="primary"  sx={{ml: 3, textTransform: 'none', fontSize: 18, bgcolor: "#f7f5bc",  color: 'black'}}>
          Contact me
        </Button>
        </Box>
      </Grid>

      {/* Right side: Image */}
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <Box
          sx={{
            backgroundImage: 'url("/fullstack.avif")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '90vh', // Adjust as needed
          }}
        />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
