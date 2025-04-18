import { Button, ProgressBar } from "react-bootstrap"
import { PlayFill } from "react-bootstrap-icons"
import { useSelector } from "react-redux"

const MusicBar = function () {
  const currentTrack = useSelector((state) => state.currentTrack.selected)

  if (!currentTrack) return null

  return (
    <Button
      variant="ligth"
      className="w-100 music-bar d-flex align-items-center justify-content-between p-3 rounded-5 shadow-lg"
      style={{ height: "80px" }}
    >
      <div className="d-flex align-items-center gap-3">
        <img
          src={currentTrack.album.cover_small}
          alt="cover"
          style={{ width: "50px", borderRadius: "8px" }}
        />
        <div className="text-start text-truncate">
          <div className="fw-bold">{currentTrack.title}</div>
          <div style={{ fontSize: "0.8rem", opacity: 0.7 }}>
            {currentTrack.artist.name}
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center gap-3">
        <ProgressBar
          now={40}
          variant="danger"
          style={{ width: "100px", height: "6px" }}
        />
        <PlayFill size={32} className="text-white" />
      </div>
    </Button>
  )
}

export default MusicBar
