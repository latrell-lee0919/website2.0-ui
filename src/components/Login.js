import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import * as AWS from 'aws-sdk/global'

export const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const authenticationData = {
        Username: username,
        Password: password,
    }

    
}
