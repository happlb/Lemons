import React from "react";
import store from "../../store";
import { connect } from "react-redux";
import { removeIngredient } from "../../store/reducers/recipies";

const { dispatch } = store;
const Ingredents = store.getState().ingredents;
const AddedIngredientFields = (props) => {
  console.log(props.ingredents);
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
  console.log(Ingredents);
  dispatch(removeIngredient(AddedIngedent));
};

function mapStateToProps(state) {
  return { ingredents: state.ingredents };
}
