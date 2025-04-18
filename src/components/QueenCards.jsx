import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentTrackAction, setFetchQueenAction } from "../redux/actions"
import { Container, Row, Col, Card } from "react-bootstrap"

const QueenCards = function () {
  const dispatch = useDispatch()
  const queenTracks = useSelector((state) => state.queen.list)

  useEffect(() => {
    dispatch(setFetchQueenAction())
  }, [dispatch])

  return (
    <Container className="mt-4">
      {queenTracks.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <>
          {/* MOBILE: DUE CAROSELLI DA 3 CARD */}
          <div className="d-flex d-lg-none overflow-auto gap-3 mb-3">
            {queenTracks.slice(0, 3).map((track) => (
              <Card
                onClick={() => dispatch(setCurrentTrackAction(track))}
                key={track.id}
                style={{ minWidth: "200px" }}
              >
                <Card.Img variant="top" src={track.album.cover_medium} />
                <Card.Body>
                  <Card.Title style={{ fontSize: "0.9rem" }}>
                    {track.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            ))}
          </div>

          <div className="d-flex d-lg-none overflow-auto gap-3 mb-3">
            {queenTracks.slice(3, 6).map((track) => (
              <Card
                onClick={() => dispatch(setCurrentTrackAction(track))}
                key={track.id}
                style={{ minWidth: "200px" }}
              >
                <Card.Img variant="top" src={track.album.cover_medium} />
                <Card.Body>
                  <Card.Title style={{ fontSize: "0.9rem" }}>
                    {track.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            ))}
          </div>

          {/* DESKTOP: DUE FILE DA 5 CARD */}
          <Row className="d-none d-lg-flex justify-content-center">
            {queenTracks.slice(0, 5).map((track) => (
              <Col
                key={track.id}
                lg={2}
                className="mb-3 d-flex justify-content-center"
              >
                <Card
                  onClick={() => dispatch(setCurrentTrackAction(track))}
                  style={{ width: "100%", maxWidth: "200px" }}
                >
                  <Card.Img variant="top" src={track.album.cover_medium} />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "0.9rem" }}>
                      {track.title}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Row className="d-none d-lg-flex justify-content-center">
            {queenTracks.slice(5, 10).map((track) => (
              <Col
                key={track.id}
                lg={2}
                className="mb-3 d-flex justify-content-center"
              >
                <Card
                  onClick={() => dispatch(setCurrentTrackAction(track))}
                  style={{ width: "100%", maxWidth: "200px" }}
                >
                  <Card.Img variant="top" src={track.album.cover_medium} />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "0.9rem" }}>
                      {track.title}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  )
}

export default QueenCards
