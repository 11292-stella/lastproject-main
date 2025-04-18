export const SET_TRACKS = "SET_TRACKS"
export const FETCH_QUEEN = "FETCH_QUEEN"
export const SET_CURRENT_TRACK = "SET_CURRENT_TRACK"

export const setTracksAction = (tracks) => {
  return {
    type: "SET_TRACKS",
    payload: tracks,
  }
}

export const setFetchQueenAction = () => {
  return (dispatch) => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("errore")
        }
      })
      .then((data) => {
        dispatch({
          type: FETCH_QUEEN,
          payload: data.data.slice(0, 10),
        })
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const setCurrentTrackAction = (track) => {
  return {
    type: SET_CURRENT_TRACK,
    payload: track,
  }
}
