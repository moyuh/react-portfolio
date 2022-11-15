import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function About () {
    return(
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <Row style= {{ justifyContent: "center", padding: "5px" }}>
                    <Col md = {7}className= "about-me">
                        <h1>
                            About Me:
                        </h1>
                        <p>
                        My background is primarily in different aspects of the medical field. I enjoy art, gaming, and playing music. I have recently changed career paths into web development! 
                        </p>
                    </Col>
                    <Col md = {7} className="coding-languages">
                        <h2>
                            Skillset:
                        </h2>
                        <ul className= "skillset">
                            <li>
                                HTML
                            </li>
                            <li>
                                CSS
                            </li>
                            <li>
                                Bootstrap
                            </li>
                            <li>
                                JavaScript
                            </li>
                            <li>
                                React.js
                            </li>
                            <li>
                                Node.js
                            </li>
                            <li>
                                Express.js
                            </li>
                            <li>
                                MySQL, NoSQL, GraphQL,
                            </li>
                            <li>
                                REST
                            </li>
                            <li>
                                PWA
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default About;