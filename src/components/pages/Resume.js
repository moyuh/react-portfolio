import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";

function Resume() {
    return(
        <div>
            <Container fluid className= "resume-section">
                <Particle />
                <Row>
                    <h2>
                        {}
                        <a
                            href='../../assets/References_Resume.pdf'
                            download='Peoples-Resume.pdf'
                            className='slide res-size'
        >
          Downloadable Resume
        </a>
      </h2>
                </Row>
                <Row>
                    <img src="../../assets/References_Resume.pdf" alt ="resume"></img>
                </Row>
            </Container>
        </div>
    )
}
export default Resume;