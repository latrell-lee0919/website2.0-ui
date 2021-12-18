import React from "react"
import { Card, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import projectService from "../services/projects"

export const ProjectCard = ({ project, user, setProjects, projects }) => {
    const navigate = useNavigate()

    const showProject = (event) => {
        event.preventDefault()
        navigate(`/projects/${project.id}`)
    }

    const remove = (id) => {
        projectService.remove(id)
        setProjects(projects.filter(project => project.id !== id))
    }

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={project.imageUrl}/>
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.previewDescription}</Card.Text>
                    <Button variant="primary" onClick={showProject}>See Project</Button>
                    {user
                    ? <Button variant="primary" onClick={() => remove(project.id)}>Remove</Button>
                    : null
                    }
                </Card.Body>
            </Card>
            
        </div>
    )
}