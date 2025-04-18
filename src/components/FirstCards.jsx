import tracksData from "../assets/tracks.json"
import { useDispatch, useSelector } from "react-redux"
import { setTracksAction } from "../redux/actions"
import { Container, Row, Col, Card } from "react-bootstrap"
import { useEffect } from "react"

const FirstCards = function () {
  const dispatch = useDispatch()

  const tracks = useSelector((state) => {
    return state.tracks.list
  })

  console.log("TRACKS FROM REDUX:", tracks)
  useEffect(() => {
    fetch("/data/tracks.json")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setTracksAction(data))
      })
  }, [dispatch])

  return (
    <Container className="mt-4">
      {tracks.length === 0 ? (
        <div>Loading tracks...</div>
      ) : (
        <>
          {/* PRIMA RIGA */}
          <div className="mb-4">
            {/* Mobile: Carosello con le prime 2 */}
            <div className="d-flex d-lg-none overflow-auto gap-3">
              {tracks.slice(0, 2).map((track) => (
                <Card key={track.id} style={{ minWidth: "200px" }}>
                  <Card.Img variant="top" src={track.url} />
                </Card>
              ))}
            </div>

            {/* Desktop: 2 card centrali grandi */}
            <Row className="d-none d-lg-flex justify-content-center">
              {tracks.slice(0, 2).map((track) => (
                <Col key={track.id} lg={6}>
                  <Card>
                    <Card.Img variant="top" src={track.url} />
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

          {/* SECONDA RIGA */}
          <div>
            {/* Mobile: Carosello con da id 3 in poi */}
            <div className="d-flex d-lg-none overflow-auto gap-3">
              {tracks.slice(2).map((track) => (
                <Card key={track.id} style={{ minWidth: "200px" }}>
                  <Card.Img
                    variant="top"
                    src={track.url}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "0.9rem" }}>
                      {track.name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              ))}
            </div>

            {/* Desktop: 5 card da id 3 a 7 */}
            <Row className="d-none d-lg-flex justify-content-center">
              {tracks
                .filter((track) => track.id >= 3 && track.id <= 7)
                .map((track) => (
                  <Col key={track.id} lg={2} className="mb-3">
                    <Card>
                      <Card.Img
                        variant="top"
                        src={track.url}
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                      <Card.Body>
                        <Card.Title style={{ fontSize: "0.9rem" }}>
                          {track.name}
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
          </div>
        </>
      )}
    </Container>
  )
}

export default FirstCards
