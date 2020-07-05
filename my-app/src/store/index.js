// import {createReducer} from "redux"
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/recipies.js'

export default configureStore({
  reducer: rootReducer,
  devTools: true
})
