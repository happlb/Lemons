import { createReducer, createAction } from "@reduxjs/toolkit";

const initState = {
  ingredents: [],
  recipies: [],
};

export default createReducer(initState, {
  addRecipies: (state, { payload }) => {
    state.recipies = payload ? payload : [];
  },
  updateIngredients: (state, { payload }) => {
    state.ingredents = payload;
  },
  removeIngredient: (state, { payload }) => {
    if (state.ingredents.includes(payload)) {
      state.ingredents.splice(state.ingredents.indexOf(payload), 1);
    }
  },
  addIngredient: (state, { payload }) => {
    if (payload && !state.ingredents.includes(payload)) {
      state.ingredents.push(payload);
    }
  },
});

export const addRecipies = createAction("addRecipies");
export const updateIngredients = createAction("updateIngredients");
export const removeIngredient = createAction("removeIngredient");
export const addIngredient = createAction("addIngredient");
