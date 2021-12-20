import React, { useState } from "react"
import { Form, Button, Container, Row, Col } from "react-bootstrap"

/*Credit to: https://www.freecodecamp.org/news/how-to-receive-emails-via-your-sites-contact-us-form-with-aws-ses-lambda-api-gateway/ for the idea (: */

export const Connect = () => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')
    const endpoint = process.env.REACT_APP_EMAIL_URL

    const sendEmail = (event) => {
        event.preventDefault()

        

        const body = JSON.stringify({
            senderName: name,
            senderEmail: email,
            message: message
        })

        const requestOptions = {
            method: "POST",
            body
        }

        fetch(endpoint, requestOptions)
            .then((response) => {
                if (!response.ok) throw new Error("Error in fetch")
                return response.json()
            })
            .then(() => {
                document.getElementById("result-text").innerText =
                    "Email sent successfully!"
            })
            .catch(() => {
                document.getElementById("result-text").innerText =
                    "An unkown error occured."
            })


        setName('')
        setEmail('')
        setMessage('')
    }


    const connectStyle = { 
        paddingTop: "40px",
        backgroundColor: "#EBECF0",
        paddingBottom: "70px"
    }


    return (
        <div style={connectStyle}>
            <Container>
                
                <Row className="justify-content-md-center">
                    <Col xs={6} md={4}>
                        <h1>Contact me.</h1>
                        <Form onSubmit={sendEmail}>
                            <Form.Group>
                                <Form.Label>Full Name:</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="fullName"
                                    onChange={({ target }) => setName(target.value)}
                                />
                                <Form.Label>Email:</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="email"
                                    onChange={({ target }) => setEmail(target.value)}
                                />
                                <Form.Label>Message:</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="message"
                                    onChange={({ target }) => setMessage(target.value)}
                                />
                                <br />
                                <Button variant="primary" type="submit">
                                    Send Email
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <div id="result-text"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}