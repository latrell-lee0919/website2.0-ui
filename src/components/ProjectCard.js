import React from "react"
import { Card, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export const ProjectCard = ({ project }) => {
    const navigate = useNavigate()

    const showProject = (event) => {
        event.preventDefault()
        navigate(`/projects/${project.id}`)
    }

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={project.imageUrl}/>
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.previewDescription}</Card.Text>
                    <Button variant="primary" onClick={showProject}>See Project</Button>
                </Card.Body>
            </Card>
            
        </div>
    )
}