import React from "react"
import { Navbar, Nav, Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import websiteLogo from '../Logo.png'

export const Footer = () => {
    const padding = {
        paddingRight: 5
    }

    return (
        <Navbar fixed="bottom" bg="dark" variant="dark">
            <Nav className="ml-auto">
                <Nav.Link href="#" as="span">
                        <Link style={padding} to="/"><Image src={websiteLogo} width={175} height={30}/></Link>
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}