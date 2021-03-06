import React from "react";
import { mount } from "enzyme";
import store from "../../store";
import { addRecipies, addIngredient, removeIngredient } from "./recipies";
const { dispatch } = store;

function renderSearchRecipiePage(args) {
  const defaultProps = {};

  const props = { ...defaultProps, ...args };
  // return mount(<SearchRecipiePage {...props} />);
}

describe("test ingredient list", () => {
  let ingredent;
  xit("adds the passed in ingredent", () => {
    ingredent = "Bread";
    dispatch(addIngredient(ingredent));
    const state = store.getState();
    expect(state.ingredents).toEqual(["Bread"]);
  });

  xit("does not add the duplicate passed in ingredent or empty", () => {
    ingredent = "Bread";
    dispatch(addIngredient(ingredent));
    ingredent = "";
    dispatch(addIngredient(ingredent));
    const state = store.getState();
    expect(state.ingredents).toEqual(["Bread"]);
  });

  xit("does not throw an error or change state when removing an un added ingredent", () => {
    ingredent = "tomato";
    dispatch(removeIngredient(ingredent));
    const state = store.getState();
    expect(state.ingredents).toEqual(["Bread"]);
  });

  xit("removes the ingredent", () => {
    ingredent = "Bread";
    dispatch(removeIngredient(ingredent));
    const state = store.getState();
    expect(state.ingredents).toEqual([]);
  });

  xit("does not throw an error or change state when calling remove on an empty list", () => {
    ingredent = "";
    dispatch(removeIngredient(ingredent));
    const state = store.getState();
    expect(state.ingredents).toEqual([]);
  });
});

describe("test recipie list", () => {
  let recipies;
  xit("adds the recipies", () => {
    recipies = ["test one", " test two", "test three"];
    dispatch(addRecipies(recipies));
    const state = store.getState();
    expect(state.recipies).toEqual(recipies);
  });

  xit("does not throw error when no recipies are recived", () => {
    recipies = null;
    dispatch(addRecipies(recipies));
    const state = store.getState();
    expect(state.recipies).toEqual([]);
  });
});
