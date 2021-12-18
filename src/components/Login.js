import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js'

export const Login = ({ setUser }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [firstLogin, setFirstLogin] = useState(false)
    const navigate = useNavigate()
    var cognitoUser

    const authenticationData = {
        Username: username,
        Password: password,
    }

    const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
        authenticationData
    )

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

    function login(event) {
        event.preventDefault()

        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: result => {
                setUser(cognitoUser.username)
                navigate("/")
            },
        
            onFailure: err => {
                console.log(err)
            },
            newPasswordRequired: userAttributes => {
                setFirstLogin(true)
            }
        })
        
    }

    function changePassword(event) {
        event.preventDefault()

        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: result => {
                console.log(result)
            },
        
            onFailure: err => {
                console.log(err)
            },
            newPasswordRequired: userAttributes => {
                
                delete userAttributes.email_verified
                delete userAttributes.phone_number_verified

                cognitoUser.completeNewPasswordChallenge(newPassword, userAttributes, {
                    onSuccess: result => {
                        console.log(result)
                    }, 
                    onFailure: err => {
                        console.log(err)
                    }
                })
            }
        })
        
        
    }

    return (
        <div className="container">
            {firstLogin ? (
                <Form>
                    <Form.Group>
                        <Form.Label>Create New Password:</Form.Label>
                        <Form.Control
                            type="text"
                            name="newPassword"
                            onChange={({ target }) => setNewPassword(target.value)}
                        />
                        <Button variant="primary" onClick={changePassword}>
                            Reset Password
                        </Button>
                    </Form.Group>
                </Form>
            ) : (
                <Form>
                    <Form.Group>
                        <Form.Label>Username:</Form.Label>
                        <Form.Control
                            type="text"
                            name="username"
                            onChange={({ target }) => setUsername(target.value)}
                        />
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Button variant="primary" type="submit" onClick={login}>
                            Login
                        </Button>
                    </Form.Group>
                </Form>
            )}
        </div>
    )
}
