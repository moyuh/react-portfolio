import React from "react";
import Typewriter from "typewriter-effect";
import { Container, Row, Col  } from "react-bootstrap";
import Particle from "../Particle";

function Type() {
    return (
        <Typewriter
        options={{
            strings:[
                "Full-Stack Developer",
                "Illustrator",
                "Hard-worker",
                "Gamer"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
        }}
        />
    );
}

function Home() {
    return(
        <section>
            <Container fluid className="home-section">
                <Particle />
                <Container className="content">
                    <Row>
                        <Col md="7" className="home-head">
                            <h1> Thanks for dropping by!</h1>
                            <h1>
                                I am Monica
                                Yuh
                            </h1>
                            <h2>
                                I am a
                            </h2>
                            <div style={{ padding: 45, textAlign: "left" }}>
                                <Type />
                            </div>
                        </Col>
                        <Col md ="5">
                            <img src= "../../assets/monica.Jpg" width="500" height="600" style={{ borderRadius: 100 }}/>
                        </Col>
                    </Row>

                </Container>

            </Container>
        </section>
    )
}

export default Home;