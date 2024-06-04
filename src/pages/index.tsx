import Header from '@/components/Header';
import LandingPage from '@/components/LandingPage';
import Projects from '@/pages/projects';
import React from 'react';
import Skills from './skills';
import Resume from './resume';


export default function Home({ projects }) {
  return (
    <>
      <Header />
      <LandingPage />
      <Projects projects={projects} /> 
      <Skills />
      <Resume />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:5000/api/projects');
  const projects = await res.json();
  return {
    props: {
      projects,
    },
  };
}
