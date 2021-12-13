import React from 'react'
import { ProjectCard } from './ProjectCard'

export const ProjectList = ({ projects }) => {

    return (
        <div>
            {projects.map((project) =>
                <ProjectCard 
                key={project.id}
                project={project}
                />
            )}
        </div>
    )

}