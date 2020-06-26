import React from "react";

const SearchRecipiePage = () => (
  <div>
    <h1>Recipie Page</h1>
    <button onClick={() => callAPI()}>search</button>
  </div>
);

export default SearchRecipiePage;

function callAPI() {
  console.log("here");
  fetch(
    "https://cors-anywhere.herokuapp.com/https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&apiKey=9504b6e1d94146f380aa780bb448628a",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "x-rapidapi-key": "9504b6e1d94146f380aa780bb448628a",
      },
    }
  )
    .then((response) => {
      console.log(response.json());
    })
    .catch((err) => {
      console.log(err);
    });
}
