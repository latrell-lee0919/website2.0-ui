import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import codeLogo from '../Code.svg'
import brainLogo from '../Brain.png'
import cloudLogo from '../Cloud.png'

export const About = () => {
    const style1 = {
        paddingTop: "20px",
    }

    const style2 = {
        paddingTop: "20px",
    }

    const style3 = {
        paddingTop: "40px",
    }

    const style4 = {
        paddingTop: "20px",
        paddingBottom: "50px"
    }

    return (
        <div>
            <Container style={style2}>
                <h1 style={style3}>About me.</h1>
                <Row style={style4}>
                    <Col xs={6} md={4}>
                        <Image src={codeLogo} width={50} height={50} roundedCircle/>
                        <h5 style={style1}>SOFTWARE DEVELOPER</h5>
                        <p style={style1}>I'm a graduate of the Capital One Developer Academy
                        with 1 year of experience working at Capital One. I have experience with a variety 
                        of tech stacks such as React, AWS, NodeJS and GoLang. 
                        </p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={brainLogo} width={50} height={50} roundedCircle/>
                        <h5 style={style1}>CONSTANT LEARNER</h5>
                        <p style={style1}>On the side, I prioritize self-study to enrich my mind. This includes
                        building side projects (like this one), studying CS concepts like data structures and
                        algorithms, and talking about neat ideas with friends.
                        </p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={cloudLogo} width={50} height={50}/>
                        <h5 style={style1}>CLOUD CERTIFIED</h5>
                        <p style={style1}>I have my AWS Solutions Architect certification. This has given me the
                        knowledge to manage cloud-based deployments through CloudFormation and build serverless
                        applications like this website.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}