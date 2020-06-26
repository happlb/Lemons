import React from "react";
import store from "../../store";
import { connect } from "react-redux";
import { removeIngredient } from "../../store/reducers/recipies";

const { dispatch } = store;

const FoundRecipies = (props) => {
  const numbers = props.recipies;
  const AddedIngedents = numbers.map((curRecipie) => (
    <div key={curRecipie.id}>
      <li>{curRecipie.title}</li>
    </div>
  ));
  return <ul>{AddedIngedents}</ul>;
};

export default connect(mapStateToProps)(FoundRecipies);

export const removeCurIngredient = (e, AddedIngedent) => {
  e.preventDefault();
  dispatch(removeIngredient(AddedIngedent));
};

function mapStateToProps(state) {
  return { recipies: state.recipies };
}
