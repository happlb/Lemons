import React from "react";
import AddAnIngredientField from "./AddAnIngredientField";
import AddedIngredientFields from "./AddedIngredientFields";
const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <h2>Added Ingredients: </h2>
    <AddedIngredientFields />
    <AddAnIngredientField />
  </div>
);

export default HomePage;
