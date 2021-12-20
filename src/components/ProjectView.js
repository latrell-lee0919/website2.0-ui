import React, { useState, useEffect } from "react"
import YouTube from 'react-youtube'
import { useParams } from "react-router"
import { Button, Container } from 'react-bootstrap'
import projectService from '../services/projects'


export const ProjectView = () => {
    const [ project, setProject ] = useState([])
    const match = useParams() 
    useEffect(() => {
        projectService
        .get(match.id)
        .then(project => {
          setProject(project)
        })
      }, [match.id])

    const videoStyle = {
        paddingTop: "70px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    const center = {
        paddingTop: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
   
    const opts = {
        height: '400',
        width: '700',
        playerVars: {
          autoplay: 1,
        },
    }

    return (
        <Container>
            <div style={videoStyle}>
                <YouTube videoId={project.videoId} opts={opts}/>
            </div>
            <div style={center}>
                <h5>Built with: {project.techStack}</h5>
            </div>
            <div style={center}>
                <p>{project.description}</p>
            </div>
            <div style={center}>
                <Button href={project.githubLink} variant="info">Github Link</Button>
            </div>
            <div style={center}>
                <Button href={project.link} variant="info">Deployed Link</Button>
            </div>
        </Container>
        
    )
}