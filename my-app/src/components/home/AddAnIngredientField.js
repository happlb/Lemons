import React from "react";
import store from "../../store";
import { addIngredient } from "../../store/reducers/recipies";

const { dispatch } = store;
var ingredent = "";

const AddAnIngredientField = () => (
  <div>
    <form>
      <label>
        Add an Ingredient:
        <input
          type="text"
          name="name"
          onChange={(e) => (ingredent = e.target.value)}
        />
      </label>
      <input type="submit" value="Add" onClick={(e) => setRecipies(e)} />
    </form>
  </div>
);

export default AddAnIngredientField;

export const setRecipies = (event) => {
  event.preventDefault();
  dispatch(addIngredient(ingredent));
};
