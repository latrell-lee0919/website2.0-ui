import React from "react"
import { Navbar, Nav, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js'


export const Navigation = ({ user }) => {
    var cognitoUser

    const poolData = {
        UserPoolId: process.env.REACT_APP_USER_POOL_ID, 
        ClientId: process.env.REACT_APP_CLIENT_ID 
    }

    const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData)

    const userData = {
        Username: process.env.REACT_APP_USERNAME, 
        Pool: userPool
    }

    cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData)

    const logout = () => {
        cognitoUser.signOut()
    }

    const padding = {
        paddingRight: 5
    }

    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
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
                    {user
                      ?  <Link style={padding} to="/create">Add New</Link>
                      : null
                    }
                </Nav.Link>
                </Nav>
                {user 
                  ? <Nav className="ml-auto"><Button variant="danger" onClick={logout}>Log Out</Button></Nav>
                  : null
                } 
            </Navbar.Collapse>
        </Navbar>
    )
}