import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Footer = () => {
    const padding = {
        paddingRight: 5
    }

    return (
        <Navbar fixed="bottom" bg="dark" variant="dark">
            <Nav>
                <Nav.Link href="#" as="span">
                        <Link style={padding} to="/">www.latrell_lee.com</Link>
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}