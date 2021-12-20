import React, { useState, useEffect } from "react"
import YouTube from 'react-youtube'
import { useParams } from "react-router"
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
   
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1,
        },
    }

    return (
        <div>
            <div style={videoStyle}>
                <YouTube videoId={project.videoId} opts={opts}/>
            </div>
            {project.category}
            {project.description}
            {project.githubLink}
            {project.link}
            {project.techStack}
        </div>
    )
}