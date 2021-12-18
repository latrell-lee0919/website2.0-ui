import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js'
import * as AWS from 'aws-sdk'

export const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [attributes, setAttributes] = useState({ phone_number_verfied: "", phone_number: "", email: "" })
    const [newPassword, setNewPassword] = useState('')
    const [firstLogin, setFirstLogin] = useState(false)
    var cognitoUser, sessionUserAttributes

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

        console.log(username)
        console.log(password)

        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: result => {
                console.log(result)
                const accessToken = result.getAccessToken().getJwtToken()
                console.log(accessToken)
        
                // //POTENTIAL: Region needs to be set if not already set previously elsewhere.
                // AWS.config.region = 'us-east-1'
        
                // AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                //     IdentityPoolId: '...', // your identity pool id here
                //     Logins: {
                //         // Change the key below according to the specific region your user pool is in.
                //         'cognito-idp.<region>.amazonaws.com/<YOUR_USER_POOL_ID>': result
                //             .getIdToken()
                //             .getJwtToken(),
                //     },
                // });
        
                // //refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
                // AWS.config.credentials.refresh(error => {
                //     if (error) {
                //         console.error(error)
                //     } else {
                //         // Instantiate aws sdk service objects now that the credentials have been updated.
                //         // example: var s3 = new AWS.S3();
                //         console.log('Successfully logged!');
                //     }
                // });
            },
        
            onFailure: err => {
                console.log(err)
            },
            newPasswordRequired: userAttributes => {
                setFirstLogin(true)
                
                delete userAttributes.email_verified
                setAttributes(userAttributes)

                sessionUserAttributes = userAttributes
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
        <div>
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
