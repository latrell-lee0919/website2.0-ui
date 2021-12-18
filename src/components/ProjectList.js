import React from 'react'
import { ProjectCard } from './ProjectCard'

export const ProjectList = ({ projects, user, setProjects }) => {

    return (
        <div>
            {projects.map((project) =>
                <ProjectCard 
                key={project.id}
                project={project}
                user={user}
                setProjects={setProjects}
                projects={projects}
                />
            )}
        </div>
    )

}