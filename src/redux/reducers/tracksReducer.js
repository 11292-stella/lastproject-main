import { SET_TRACKS } from "../actions"

const intialState = {
  list: [],
}

const tracksReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_TRACKS:
      return {
        ...state,
        list: action.payload,
      }

    // case:

    // case:

    default:
      return state
  }
}
export default tracksReducer
