import React, { useState, useEffect } from 'react'
//import { useField } from './hooks'
import { Home } from './components/Home';
import { Navigation } from './components/Navigation';
import { ProjectList } from './components/ProjectList';
import { ProjectForm } from './components/ProjectForm'
import {
  Routes,
  Route,
} from "react-router-dom"
import projectService from './services/projects'
import { ProjectView } from './components/ProjectView';

const App = () => {
  const [ projects, setProjects ] = useState([])

  useEffect(() => {
    projectService
    .getAll()
    .then(projects => {
      setProjects(projects)
    })
  }, [])

  const addProject = (projectObject) => {
    projectService
    .create(projectObject)
    .then(returnedProject => {
        setProjects(projects.concat(returnedProject))
    })
}

  return (
    <div className="container">
      <Navigation />
      <Routes>
        <Route path="/projects" element={<ProjectList projects={projects} />}/>
        <Route path="/projects/:id" element={<ProjectView projects={projects} />}/>
        <Route path="/create" element={<ProjectForm createProject={addProject} />}/> {/* 
        this is where we conditionally render based on if i'm logged in
        */}
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
