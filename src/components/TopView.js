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
                <Row>
                    <Col sm={true}>
                        <Image src={mainPhoto} width={250} height={250} roundedCircle/>
                    </Col>
                    <Col sm={true}>
                        <h1>Welcome to my website.</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}