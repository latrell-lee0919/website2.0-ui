/* eslint-disable no-unused-vars */
import axios from "axios"
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js'

const poolData = {
    UserPoolId: process.env.REACT_APP_USER_POOL_ID, 
    ClientId: process.env.REACT_APP_CLIENT_ID 
}

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData)

const getAuthenticatedUser = () => {
    return userPool.getCurrentUser()
}




const baseUrl = process.env.REACT_APP_BASE_URL

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const get = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data
}

const create = async (newObject) => {
    var token

    getAuthenticatedUser().getSession((err, session) => {
        if (err) {
            console.log(err)
        }
    token = session.getIdToken().getJwtToken()
    })

    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.post(baseUrl, newObject, config)
    return response.data
}

const remove = async (id) => {
    var token

    getAuthenticatedUser().getSession((err, session) => {
        if (err) {
            console.log(err)
        }
    token = session.getIdToken().getJwtToken()
    })
    
    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.delete(`${baseUrl}/${id}`, config)
    return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, remove, get }