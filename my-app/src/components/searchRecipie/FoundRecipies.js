import React from "react";
import store from "../../store";
import { connect } from "react-redux";
import { removeIngredient } from "../../store/reducers/recipies";
import { MyRecipieContainer } from "./styles";
const { dispatch } = store;
const APIKey = "9504b6e1d94146f380aa780bb448628a";

const FoundRecipies = (props) => {
  const recipies = props.recipies.length ? props.recipies : [];
  const AddedRecipies = recipies.map((curRecipie) => (
    <div key={curRecipie.id}>
      <MyRecipieContainer>
        <img src={curRecipie.image} />
        <div>
          <h3>{curRecipie.title}</h3>
          <button onClick={getRecipiesbyId(curRecipie.id)}>
            Go To Recipie{" "}
          </button>
        </div>
      </MyRecipieContainer>
    </div>
  ));
  return <ul>{AddedRecipies}</ul>;
};

export default connect(mapStateToProps)(FoundRecipies);

export const removeCurIngredient = (e, AddedIngedent) => {
  e.preventDefault();
  dispatch(removeIngredient(AddedIngedent));
};

function mapStateToProps(state) {
  return { recipies: state.recipies };
}

function getRecipiesbyId(curId) {
  fetch(
    "https://cors-anywhere.herokuapp.com/https://api.spoonacular.com/recipes/" +
      curId +
      "/information?" +
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
      response.json().then((value) => window.open(value.sourceUrl));
    })
    .catch((err) => {
      console.log(err);
    });
}
