import React, { useState, useEffect } from 'react'
//import { useField } from './hooks'
import { Home } from './components/Home';
import { Navigation } from './components/Navigation';
import { ProjectList } from './components/ProjectList';
import {
  Routes,
  Route,
  // useRouteMatch,
  // useHistory,
} from "react-router-dom"
import projectService from './services/projects'

const App = () => {
  const [ projects, setProjects ] = useState([])

  useEffect(() => {
    projectService
    .getAll()
    .then(projects => {
      setProjects(projects)
    })
  }, [])

  return (
    <div className="container">
      <Navigation />
      <Routes>
        <Route path="/projects" element={<ProjectList projects={projects} />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
