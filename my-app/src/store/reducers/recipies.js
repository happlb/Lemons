import { createReducer, createAction } from '@reduxjs/toolkit'

const initState = {
  veg: false,
  ingredents: [],
  recipies: []
}

export default createReducer(initState, {
  ADD_RECIPIES: (state, { payload }) => {
    state.recipies = payload ? payload : []
  },
  REMOVE_INGREDIENT: (state, { payload }) => {
    if (state.ingredents.includes(payload)) {
      state.ingredents.splice(state.ingredents.indexOf(payload), 1)
    }
  },
  ADD_INGREDIENT: (state, { payload }) => {
    if (payload && !state.ingredents.includes(payload)) {
      state.ingredents.push(payload)
    }
  },
  SET_VEG: (state, { payload }) => {
    state.veg = payload
  }
})

export const addRecipies = createAction('ADD_RECIPIES')
export const removeIngredient = createAction('REMOVE_INGREDIENT')
export const addIngredient = createAction('ADD_INGREDIENT')
export const setVeg = createAction('SET_VEG')
