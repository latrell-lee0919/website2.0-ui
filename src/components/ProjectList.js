import React from 'react'
import { ProjectCard } from './ProjectCard'

export const ProjectList = ({ projects, user, setProjects }) => {

    const style = {
        paddingTop: "60px"
    }

    return (
        <div className="container" style={style}>
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