import React from "react"
import YouTube from 'react-youtube'
import { useParams } from "react-router"


export const ProjectView = ({ projects }) => {
    const match = useParams()
    const project = match.id ? projects.find(project => project.id === match.id) : null
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1,
        },
    }

    return (
        <div>
            <YouTube videoId={project.videoId} opts={opts}/>
            {project.category}
            {project.description}
            {project.githubLink}
            {project.link}
            {project.techStack}
        </div>
    )
}