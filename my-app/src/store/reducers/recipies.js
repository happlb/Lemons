import { createReducer, createAction } from "@reduxjs/toolkit";

const initState = {
  ingredents: [],
  recipies: [
    {
      image: "https://spoonacular.com/recipeImages/716429-312x231.jpg",
      title: "beans",
      id: "1",
    },
    {
      image: "https://spoonacular.com/recipeImages/716429-312x231.jpg",
      title: "beans again",
      id: "1",
    },
  ],
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
