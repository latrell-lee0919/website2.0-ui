import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"


export const Navigation = () => {
    const padding = {
        paddingRight: 5
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#" as="span">
                    <Link style={padding} to="/">Home</Link>
                </Nav.Link>
                <Nav.Link href="#" as="span">
                    <Link style={padding} to="/projects">Projects</Link>
                </Nav.Link>
                <Nav.Link href="#" as="span">
                    <Link style={padding} to="#">Contact</Link>
                </Nav.Link>
                {/* <Nav.Link href="#" as="span">
                    {user
                    ? <Link style={padding} to="/add">login</Link>
                    : null
                    }
                </Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}