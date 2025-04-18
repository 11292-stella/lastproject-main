import { SET_CURRENT_TRACK } from "../actions"

const initialState = {
  selected: null,
}

const currentTrackReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_TRACK:
      return {
        ...state,
        selected: action.payload,
      }
    default:
      return state
  }
}

export default currentTrackReducer
