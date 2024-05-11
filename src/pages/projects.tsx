import { Button, Typography } from '@mui/material'
import React from 'react'

type Project = {
  name: string;
  description: string;
  techStack: string[];
  siteURL: string;
  githubURL: string
}

type Props = {
  projects: Project[]
}


const project: React.FC<Props> = ({projects }) => {
  return (
    <div>
        <div>
        <Typography>Projects</Typography>
        </div>
        <div>
          {projects.map((project,index) => (
            <div key={index}>
              <Typography variant='h3'>{project.name}</Typography>
              <Typography>{project.description}</Typography>
              <Typography>Tech stack: {project.techStack.join(', ')}</Typography>
              <Button>
              <a href={project.siteURL} target="_blank" rel='noopener noreferrer'>View Site</a>
              </Button>
              <Button>
              <a href={project.githubURL} target="_blank" rel='noopener noreferrer'>View Code</a>
              </Button>

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

export default project