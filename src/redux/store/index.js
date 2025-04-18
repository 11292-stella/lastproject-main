import { configureStore, combineReducers } from "@reduxjs/toolkit"

import tracksReducer from "../reducers/tracksReducer"
import queenReducer from "../reducers/queenReducer"
import currentTrackReducer from "../reducers/currentTrackReducer"

const uniqueReducer = combineReducers({
  tracks: tracksReducer,
  queen: queenReducer,
  currentTrack: currentTrackReducer,
})

const store = configureStore({
  reducer: uniqueReducer,
})
export default store
