import React from "react";
import store from "../../store";
import { connect } from "react-redux";
import { removeIngredient } from "../../store/reducers/recipies";

const { dispatch } = store;

const AddedIngredientFields = (props) => {
  const numbers = props.ingredents;
  const AddedIngedents = numbers.map((AddedIngedent) => (
    <div key={AddedIngedent}>
      <li>{AddedIngedent}</li>
      <input
        type="submit"
        value="Delete"
        onClick={(e) => removeCurIngredient(e, AddedIngedent)}
      />
    </div>
  ));
  return <ul>{AddedIngedents}</ul>;
};

export default connect(mapStateToProps)(AddedIngredientFields);

export const removeCurIngredient = (e, AddedIngedent) => {
  e.preventDefault();
  dispatch(removeIngredient(AddedIngedent));
};

function mapStateToProps(state) {
  return { ingredents: state.ingredents };
}
