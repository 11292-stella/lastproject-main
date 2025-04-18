import { Container, Row, Col } from "react-bootstrap"
import MusicBar from "./MusicBar"

const MyFooter = function () {
  return (
    <>
      <Container fluid className="bg-dark text-light mt-auto py-3">
        <Row>
          <Col className="text-start text-secondary">
            <p>Italia | English (UK)</p>
            Copyright © {new Date().getFullYear()} Apple Inc. Tutti i diritti
            riservati.
            <p>
              Condizioni dei servizi internet | Apple Music e privacy | Avviso
              sui cookie | Supporto | Feedback
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default MyFooter
