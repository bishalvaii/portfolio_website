import React from 'react';
import { Typography, Box, Container, Paper, List, ListItem, ListItemText } from '@mui/material';

const Skills: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: '15px', backgroundColor: '#f9f9f9' }}>
        <Typography variant="h2" sx={{ fontFamily: 'Poppins', fontWeight: 'bold', mb: 3, textAlign: 'center' }}>
          Technical Skills
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <List sx={{ maxWidth: '500px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              'JavaScript',
              'TypeScript',
              'ReactJS',
              'NodeJS',
              'PostgreSQL',
              'C',
              'Java',
              'Adobe Photoshop',
              'Git and GitHub',
            ].map((skill, index) => (
              <ListItem key={index} sx={{ flexBasis: '25%', textAlign: 'center', minWidth: '150px' }}>
                <ListItemText primary={skill} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Typography variant="h2" sx={{ fontFamily: 'Poppins', fontWeight: 'bold', mt: 5, mb: 3, textAlign: 'center' }}>
          Soft Skills
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <List sx={{ maxWidth: '500px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              'Attention to Detail',
              'Time Management',
              'Good Verbal and Written Communication',
            ].map((skill, index) => (
              <ListItem key={index} sx={{ flexBasis: '25%',textAlign: 'center', minWidth: '150px' }}>
                <ListItemText primary={skill} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Paper>
    </Container>
  );
};

export default Skills;
