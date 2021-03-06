import React, { useState, useEffect } from 'react'
//import { useField } from './hooks'
import { Home } from './components/Home';
import { Navigation } from './components/Navigation'
import { ProjectList } from './components/ProjectList'
import { ProjectForm } from './components/ProjectForm'
import { ProjectView } from './components/ProjectView'
import { Login } from './components/Login'
import { Footer } from './components/Footer'
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom"
import projectService from './services/projects'


const App = () => {
  const [ projects, setProjects ] = useState([])
  const [ user, setUser ] = useState(null)

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
    <div>
      <Navigation user={user} setUser={setUser}/>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser}/>}/>
        <Route path="/projects" element={<ProjectList projects={projects} user={user} setProjects={setProjects}/>}/>
        <Route path="/projects/:id" element={<ProjectView />}/>
        <Route exact path="/create" element={
          user ? (
          <ProjectForm createProject={addProject} />
          ) : (
            <Navigate to="/" />
          )
        }/> 
        <Route path="/" element={<Home />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
