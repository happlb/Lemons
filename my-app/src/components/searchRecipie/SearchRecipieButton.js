import React from 'react'
import { connect } from 'react-redux'
import store from '../../store'
import { addRecipies } from '../../store/reducers/recipies'

const { dispatch } = store
const APIKey = '9504b6e1d94146f380aa780bb448628a'
const SearchRecipieButton = props => (
  <div>
    <button onClick={() => getRecipiesbyIngredient(props)}>search</button>
  </div>
)

export default connect(mapStateToProps)(SearchRecipieButton)

function mapStateToProps (state) {
  return { ingredents: state.ingredents }
}

function getRecipiesbyIngredient (props) {
  var curIds = []
  const ingredients = props.ingredents.map(ingredent => ingredent + ',')
  if (ingredients.length) {
    console.log(ingredients)
    fetch(
      'https://cors-anywhere.herokuapp.com/https://api.spoonacular.com/recipes/findByIngredients?ingredients=' +
        ingredients +
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
        response.json().then(value => dispatch(addRecipies(value)))
      })
      .catch(err => {
        console.log(err)
      })
  }
}
