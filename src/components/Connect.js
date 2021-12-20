import React from "react"
import { Form, Button, Container, Row, Col } from "react-bootstrap"

export const Connect = () => {
    const connectStyle = { 
        paddingTop: "40px",
        backgroundColor: "#EBECF0",
        paddingBottom: "70px"
    }

    return (
        <div style={connectStyle}>
            <Container>
                <h1>Connect with me.</h1>
                <Row>
                    <Col xs={6} md={4}>
                        <Form>
                            <Form.Group>
                                <Form.Label>Full Name:</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="fullName"
                                />
                                <Form.Label>Email:</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="email"
                                />
                                <Form.Label>Message:</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="message"
                                />
                                <br />
                                <Button variant="primary" type="submit">
                                    Send Email
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col xs={6} md={4}>
                        <div>
                            Hello connectors
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}