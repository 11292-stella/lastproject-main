import { FETCH_QUEEN } from "../actions"

const intialState = {
  list: [],
}

const queenReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_QUEEN:
      return {
        ...state,
        list: action.payload,
      }

    default:
      return state
  }
}

export default queenReducer
