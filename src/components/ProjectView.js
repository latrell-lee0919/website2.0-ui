import React from "react"
import YouTube from 'react-youtube'
import { useParams } from "react-router"


export const ProjectView = ({ projects }) => {
    console.log(projects)
    const match = useParams()
    console.log(match.id)
    const project = match.id ? projects.find(project => project.id === match.id) : null
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1,
        },
    }

    console.log(project)

    return (
        <div>
            <YouTube videoId={project.videoId} opts={opts}/>
        </div>
    )
}