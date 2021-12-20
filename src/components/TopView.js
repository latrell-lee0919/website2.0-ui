import React from "react"
import mainPhoto from '../WebsitePic.png'
import { Image, Container, Row, Col } from "react-bootstrap"

export const TopView = () => {
    const color = {
        paddingTop: "40px",
        backgroundColor: "#EBECF0",
        paddingBottom: "30px"
    }

    const style1 = {
        paddingTop: "20px",
    }

    return (
        <div style={color}>
            <Container style={style1}>
                <Row className="justify-content-md-center">
                    <Col xs lg="3">
                        <Image src={mainPhoto} width={225} height={225} roundedCircle/>
                    </Col>
                    <Col md="auto">
                        <h1>Welcome to my website! I'm Latrell.</h1>
                        <p>Developer and Mentor with 1 year of working experience.</p>
                        <p>Passionate about social justice, educational equity, and building cool stuff.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}