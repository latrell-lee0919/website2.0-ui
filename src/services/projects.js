/* eslint-disable no-unused-vars */
import axios from "axios"
import dotenv from 'dotenv'

const baseUrl = process.env.REACT_APP_BASE_URL

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const create = async (newObject) => {
    const response = await axios.post(baseUrl, newObject)
    return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create }