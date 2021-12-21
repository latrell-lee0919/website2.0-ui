import React, { useState } from 'react'
import { ProjectCard } from './ProjectCard'
import { Dropdown, Container, Row, Button, ButtonToolbar } from 'react-bootstrap'

export const ProjectList = ({ projects, user, setProjects }) => {
    const [newFilter, setNewFilter] = useState('')

    const style = {
        paddingTop: "60px",
        paddingBottom: "80px"
    }

    const Filter = () => {
        var intialCategories = projects.map(p => p.category)
        var uniqueCategories = new Set(intialCategories)
        const categories = [...uniqueCategories]


        return (
            <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Filter by Category
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {categories.map(category => 
                        <Dropdown.Item key={category} name={category} onClick={(event) => { setNewFilter(event.target.name)}}>{category}</Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
        )
    }


    const filtered = projects.filter(project => project.category.includes(newFilter))

    if (filtered.length === 0) {
        return (
            <Container style={style}>
                <h1>Coming Soon!</h1>
            </Container>
        )
    } else {
        return (
            <Container style={style}>
                <Row>
                    <ButtonToolbar className="mb-3">
                        <Filter/>
                        <Button variant="primary" onClick={() => setNewFilter('')}>
                            Show All
                        </Button>
                    </ButtonToolbar>
                </Row>
                
                <br />
                <Row>
                    {filtered.map((project) =>
                    <div>
                        <ProjectCard 
                        key={project.id}
                        project={project}
                        user={user}
                        setProjects={setProjects}
                        projects={projects}
                        />
                        <br/>
                    </div>  
                    )}
                </Row>
            </Container>
        )
    }
}