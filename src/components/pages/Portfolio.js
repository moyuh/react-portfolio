import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { SiGithub } from "react-icons/si";
import wow from "../../assets/projects/wow.png";
import mtg from "../../assets/projects/mtg.png";
import art from "../../assets/projects/art.png";
import jate from "../../assets/projects/jate.png";
import schedule from "../../assets/projects/schedule.png";
import notes from "../../assets/projects/notes.png";


function ProjectCards(props) {
    return(
        <Card className="project-card">
            <Card.Img variant= "top" src= {props.imgPath} alt= "card-img" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style ={{ textAlign: "justify" }}> {props.description}</Card.Text>
                <Button variant ="primary" href= {props.githubLink} target= "_blank">
                    <SiGithub />
                </Button>
            </Card.Body>
        </Card>
    );
}

function Portfolio () {
    return (
        <Container fluid className = "projects">
            <Particle />
            <Container>
                <h1 className="proj-page-head">Portfolio:</h1>
                <Row style= {{ justifyContent: "center, paddingBottom: 5px"}}>
                    <Col md= "4" className = "proj-Card">
                        <ProjectCards
                        imgPath={wow}
                        title="Mythic Plus Teams:"
                        description="A website for World of Warcraft players to prepare for Mythic Plus content by analyzing personal and team average statistics."
                        githubLink="https://mythic-plus-team.herokuapp.com/" />
                    </Col>
                    <Col md= "4" className = "proj-Card">
                        <ProjectCards
                        imgPath={mtg}
                        title="Card Wishlist Creator:"
                        description="A website for Magic the Gathering players to prepare a Wishlist and save it to local storage before heading to their cardshop they can also get an idea of what the cost will be."
                        githubLink="https://peoplesm.github.io/magic-app/" />
                    </Col>
                    <Col md= "4" className = "proj-Card">
                        <ProjectCards
                        imgPath={art}
                        title="Mo Yuh Art Co:"
                        description=" A website displaying my art so I can show friends and clients some of my previous work."
                        githubLink="https://moyuh.github.io/moyuhartco/" />
                    </Col>
                    <Col md= "4" className = "proj-Card">
                        <ProjectCards
                        imgPath={jate}
                        title="Just Another Text Editor:"
                        description="Uses PWA technology to save notes or code snippets with or without internet connection."
                        githubLink="https://j-ate-just-another-text-editor.herokuapp.com/" />
                    </Col>
                    <Col md= "4" className = "proj-Card">
                        <ProjectCards
                        imgPath={schedule}
                        title="Work Day Scheduler:"
                        description="Schedule your workday using this website. Current,past, and future appointments are color coded for user ease!"
                        githubLink="https://moyuh.github.io/daily-work-scheduler/" />
                    </Col>
                    <Col md= "4" className = "proj-Card">
                        <ProjectCards
                        imgPath={notes}
                        title="Noteworthy:"
                        description="Keep track of the things that matter most with this note taking website!"
                        githubLink="https://dry-badlands-33193.herokuapp.com" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Portfolio;