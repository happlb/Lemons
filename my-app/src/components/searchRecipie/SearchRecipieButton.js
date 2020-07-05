import React from 'react'
import { connect } from 'react-redux'
import store from '../../store'
import { addRecipies } from '../../store/reducers/recipies'

const { dispatch } = store
const APIKey = '9504b6e1d94146f380aa780bb448628a'
const SearchRecipieButton = props => (
  <div style={{ float: 'right', marginTop: '10px' }}>
    <button onClick={() => getRecipiesbyIngredient(props)}>
      Search For Recipes
    </button>
  </div>
)

export default connect(mapStateToProps)(SearchRecipieButton)

function mapStateToProps (state) {
  return { ingredents: state.ingredents, veg: state.veg }
}

function getRecipiesbyIngredient (props) {
  const ingredients = props.ingredents.map(ingredent => ingredent + ',')
  const veg = props.veg ? 'vegetarian' : ''
  console.log(veg)
  if (ingredients.length) {
    fetch(
      'https://cors-anywhere.herokuapp.com/https://api.spoonacular.com/recipes/complexSearch?fillIngredients=true&addRecipeInformation=true&includeIngredients=' +
        ingredients +
        '&diet=' +
        veg +
        '&apiKey=' +
        APIKey,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
      .then(response => {
        response.json().then(value => dispatch(addRecipies(value.results)))
      })
      .catch(err => {
        console.log(err)
      })
  }
}
