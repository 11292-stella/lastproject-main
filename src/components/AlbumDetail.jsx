import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const AlbumDetail = () => {
  const { id } = useParams()
  const album = useSelector((state) =>
    state.album.list.find((a) => a.id.toString() === id)
  )

  if (!album) return <p>Album non trovato</p>

  return (
    <div>
      <h2>{album.title}</h2>
      <img src={album.cover_big} alt={album.title} style={{ width: 300 }} />
      <ul>
        {album.tracks?.data?.map((track) => (
          <li key={track.id}>{track.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default AlbumDetail
