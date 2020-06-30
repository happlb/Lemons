import React from "react";
import { connect } from "react-redux";
import store from "../../store";
import { addRecipies } from "../../store/reducers/recipies";

const { dispatch } = store;
const APIKey = "9504b6e1d94146f380aa780bb448628a";
const SearchRecipieButton = (props) => (
  <div>
    <button onClick={() => callAPI(props)}>search</button>
  </div>
);

export default connect(mapStateToProps)(SearchRecipieButton);

function mapStateToProps(state) {
  return { ingredents: state.ingredents };
}

function callAPI(props) {
  var curIds = [];
  const ingredients = props.ingredents.map((ingredent) => ingredent + ",");
  if (ingredients.length) {
    ingredients[ingredients.length - 1].slice(0, -2);
    console.log(ingredients);
    fetch(
      "https://cors-anywhere.herokuapp.com/https://api.spoonacular.com/recipes/findByIngredients?ingredients=" +
        ingredients +
        "&apiKey=" +
        APIKey,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        response
          .json()
          .then((value) =>
            value.map((i) => curIds.push(i.id.toString() + ","))
          );
        getRecipiesbyId(curIds);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

function getRecipiesbyId(curIds) {
  console.log(curIds);
  fetch(
    "https://cors-anywhere.herokuapp.com/https://api.spoonacular.com/recipes/informationBulk" +
      curIds +
      "&apiKey=" +
      APIKey,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      response.json().then((value) => dispatch(addRecipies(value)));
    })
    .catch((err) => {
      console.log(err);
    });
}
