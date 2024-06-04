import { Button, Typography } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import accImage from "../utils/acc.jpg"

type Project = {
  name: string;
  description: string;
  techStack: string[];
  siteURL: string;
  githubURL: string
  projectImage: string;
}

type Props = {
  projects: Project[]
}

const Projects: React.FC<Props> = ({ projects }) => {
  return (
    <div>
      <div>
        <Typography sx={{ fontSize: 32,mt: 2, mb: 2 ,ml: 1,fontFamily: 'Poppins'}}>Projects</Typography>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {projects.map((project, index) => (
          <div key={index} style={{ width: '30%', marginBottom: '20px', position: 'relative' }}>
            <div style={{ position: 'relative', height: '300px', width: '100%' }}>
              <Image fill={true} src={project.projectImage || accImage} alt='img' style={{ borderRadius: '8px' }} />
              <div style={{ 
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', 
                flexDirection: 'column', justifyContent: 'center', alignItems: 'center', 
                backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '8px', padding: '20px', boxSizing: 'border-box' 
              }}>
                <Typography variant='h4' style={{ color: '#fff',fontWeight: 'bold', marginBottom: '10px', textAlign: 'center' }}>{project.name}</Typography>
                <Typography style={{ color: '#fff',fontWeight: 'bold', marginBottom: '10px', textAlign: 'center' }}>{project.description}</Typography>
                <Typography style={{ color: '#fff', marginBottom: '10px', textAlign: 'center' }}>Tech stack: {project.techStack.join(', ')}</Typography>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button sx={{
                    bgcolor: '#f7f5bc',
                    borderRadius: '20px', // Set border radius to make it rounded
                    px: 4, // Horizontal padding
                    py: 1, // Vertical padding
                    marginRight: '10px',
                    '&:hover': {
                      bgcolor: '#e47200', // Change color on hover
                    },
                    textTransform: 'none',
                    fontSize: 18
                  }}>
                    <a href={project.siteURL} target="_blank" rel='noopener noreferrer' style={{ color: 'black', textDecoration: 'none' }}>View Site</a>
                  </Button>
                  <Button sx={{
                    bgcolor: '#f7f5bc',
                    borderRadius: '20px', // Set border radius to make it rounded
                    px: 4, // Horizontal padding
                    py: 1, // Vertical padding
                    '&:hover': {
                      bgcolor: '#e47200', // Change color on hover
                    },
                    textTransform: 'none',
                    fontSize: 18
                  }}>
                    <a href={project.githubURL} target="_blank" rel='noopener noreferrer' style={{ color: 'black', textDecoration: 'none' }}>View Code</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:5000/api/projects')
  const projects = await res.json();
  return {
    props: {
      projects
    }
  }
}

export default Projects
