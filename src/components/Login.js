import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js'
import * as AWS from 'aws-sdk'

export const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const authenticationData = {
        Username: username,
        Password: password,
    }

    const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
        authenticationData
    )

    const poolData = {
        UserPoolId: '...', // add to env
        ClientId: '...' // add to env
    }

    const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData)
    const userData = {
        Username: 'username', // add to env
        Pool: userPool
    }

    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData)
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (result) => {
            const accessToken = result.getAccessToken().getJwtToken();
    
            //POTENTIAL: Region needs to be set if not already set previously elsewhere.
            AWS.config.region = '<region>';
    
            AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                IdentityPoolId: '...', // your identity pool id here
                Logins: {
                    // Change the key below according to the specific region your user pool is in.
                    'cognito-idp.<region>.amazonaws.com/<YOUR_USER_POOL_ID>': result
                        .getIdToken()
                        .getJwtToken(),
                },
            });
    
            //refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
            AWS.config.credentials.refresh(error => {
                if (error) {
                    console.error(error);
                } else {
                    // Instantiate aws sdk service objects now that the credentials have been updated.
                    // example: var s3 = new AWS.S3();
                    console.log('Successfully logged!');
                }
            });
        },
    
        onFailure: function(err) {
            alert(err.message || JSON.stringify(err));
        },
    })

    
}
