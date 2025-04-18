import { Container, Row, Col, Button } from "react-bootstrap"

const sampleData = [
  { id: 1, label: "Esplora per genere" },
  { id: 2, label: "Decenni" },
  { id: 3, label: "Attività e stati d'animo" },
  { id: 4, label: "Worldwide" },
  { id: 5, label: "Classifiche" },
  { id: 6, label: "Audio spaziale" },
  { id: 7, label: "Video musicali" },
  { id: 8, label: "Nuovi artisti" },
  { id: 9, label: "Hit del passato" },
]
const OthersCards = () => {
  return (
    <Container className="mt-4 mb-4">
      {/* MOBILE: colonna verticale */}
      <div className="d-flex d-lg-none flex-column gap-3">
        {sampleData.map((item) => (
          <Button
            key={item.id}
            className="others-btn w-100 text-start d-flex text-danger justify-content-between"
          >
            {item.label} <span>{">"}</span>
          </Button>
        ))}
      </div>

      {/* DESKTOP: griglia 3x3 */}
      <Row className="d-none d-lg-flex">
        {sampleData.map((item) => (
          <Col lg={4} key={item.id} className="mb-4">
            <Button className="others-btn d-flex text-danger justify-content-between text-start w-100">
              {item.label} <span>{">"}</span>
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default OthersCards
