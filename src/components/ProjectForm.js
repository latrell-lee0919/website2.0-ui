import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export const ProjectForm = ({ 
    createProject 
}) => {
    const [imageUrl, setImageUrl] = useState('')
    const [category, setCategory] = useState('')
    const [previewDescription, setPreviewDescription] = useState('')
    const [techStack, setTechStack] = useState('')
    const [link, setLink] = useState('')
    const [videoId, setVideoId] = useState('')
    const [description, setDescription] = useState('')
    const [githubLink, setGithubLink] = useState('')
    const [title, setTitle] = useState('')
    const navigate = useNavigate()


    const addProject = (event) => {
        event.preventDefault()
        createProject({
            imageUrl: imageUrl,
            category: category,
            previewDescription: previewDescription,
            techStack: techStack,
            link: link,
            videoId: videoId,
            description: description,
            githubLink: githubLink,
            title: title
        })

        setImageUrl('')
        setCategory('')
        setPreviewDescription('')
        setTechStack('')
        setLink('')
        setVideoId('')
        setDescription('')
        setGithubLink('')
        setTitle('')

        navigate("/projects")
    }
    
    return (
        <div className="container">
            <h2>Add New Project</h2>
            <Form onSubmit={addProject}>
                <Form.Group>
                    <Form.Label>Image URL:</Form.Label>
                    <Form.Control
                        type="text"
                        name="imageUrl"
                        onChange={({ target }) => setImageUrl(target.value)}
                    />
                    <Form.Label>Category:</Form.Label>
                    <Form.Control
                        type="text"
                        name="category"
                        onChange={({ target }) => setCategory(target.value)}
                    />
                    <Form.Label>Preview Description:</Form.Label>
                    <Form.Control
                        type="text"
                        name="previewDescription"
                        onChange={({ target }) => setPreviewDescription(target.value)}
                    />
                    <Form.Label>Tech Stack:</Form.Label>
                    <Form.Control
                        type="text"
                        name="techStack"
                        onChange={({ target }) => setTechStack(target.value)}
                    />
                    <Form.Label>Link:</Form.Label>
                    <Form.Control
                        type="text"
                        name="link"
                        onChange={({ target }) => setLink(target.value)}
                    />
                    <Form.Label>Video ID:</Form.Label>
                    <Form.Control
                        type="text"
                        name="videoId"
                        onChange={({ target }) => setVideoId(target.value)}
                    />
                    <Form.Label>Description:</Form.Label>
                    <Form.Control
                        type="text"
                        name="description"
                        onChange={({ target }) => setDescription(target.value)}
                    />
                    <Form.Label>GitHub Link:</Form.Label>
                    <Form.Control
                        type="text"
                        name="githubLink"
                        onChange={({ target }) => setGithubLink(target.value)}
                    />
                    <Form.Label>Title:</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        onChange={({ target }) => setTitle(target.value)}
                    />
                    <Button variant="primary" type="submit">
                        Create Project
                    </Button>
                </Form.Group>
            </Form>
        </div>
    )


}