import React from "react";
import AddAnIngredientField from "./AddAnIngredientField";
import AddedIngredientFields from "./AddedIngredientFields";
import SearchRecipieButton from "./SearchRecipieButton";
import FoundRecipies from "./FoundRecipies";

export const HomePage = () => (
  <div>
    <h2>Added Ingredients: </h2>
    <AddedIngredientFields />
    <AddAnIngredientField />
    <SearchRecipieButton />
    <FoundRecipies />
  </div>
);

export default HomePage;
