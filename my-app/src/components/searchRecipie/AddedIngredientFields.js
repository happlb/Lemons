import React from "react";
import store from "../../store";
import { connect } from "react-redux";
import { removeIngredient } from "../../store/reducers/recipies";
import { MyButton } from "./styles";
const { dispatch } = store;

const AddedIngredientFields = (props) => {
  const AddedIngedents = props.ingredents.map((AddedIngedent) => (
    <div style={{ textAlign: "right" }} key={AddedIngedent}>
      {AddedIngedent}
      <input
        style={{ float: "right" }}
        style={{ marginLeft: "25px", marginTop: "10px" }}
        type="submit"
        value="Delete"
        onClick={(e) => removeCurIngredient(e, AddedIngedent)}
      />
    </div>
  ));
  return <div className="AddedIngedents">{AddedIngedents}</div>;
};

export default connect(mapStateToProps)(AddedIngredientFields);

export const removeCurIngredient = (e, AddedIngedent) => {
  e.preventDefault();
  dispatch(removeIngredient(AddedIngedent));
};

function mapStateToProps(state) {
  return { ingredents: state.ingredents };
}
