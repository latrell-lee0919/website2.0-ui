import React from "react"

export const ProjectCard = ({ project }) => {
    return (
        <div>
            {project.imageUrl}
            {project.category}
            {project.description}
            {project.githubLink}
            {project.link}
            {project.previewDescription}
            {project.techStack}
        </div>
    )
}