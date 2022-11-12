import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SiDiscord, SiLinkedin, SiGithub } from "react-icons/si";

function Footer() {
    return (
        <Container fluid className="mainfooter">
            <Row>
                <Col md="4" className="footer-name"
            >
                    <h3>🖤 Monica Yuh 🖤</h3>
                </Col>
                <Col md="4" className='footer-body'>
                    <ul className= 'footer-social-icons'>
                        <li className= 'social-icons'>
                            <a
                            href="https://github.com/moyuh"
                            style={{ color: "white" }}
                            target= "_blank"
                            rel="noopener noreferrer">
                                <SiGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                            href="https://www.linkedin.com/in/monica-yuh-b6709217b/"
                            style={{ color: "white" }}
                            target= "_blank"
                            rel= "noopener noreferrer">
                                <SiLinkedin />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                            href= "https://discord.gg/ssucWWRv2u"
                            style={{ color: "white" }}
                            target= "_blank"
                            rel= "noopener noreferrer">
                                <SiDiscord />
                            </a>

                        </li>

                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;