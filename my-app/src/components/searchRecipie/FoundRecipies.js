import React from 'react'
import store from '../../store'
import { connect } from 'react-redux'
import { removeIngredient } from '../../store/reducers/recipies'
import {
  AddFormContainer,
  FormSpace,
  RowSpaced,
  InputField,
  MyButton
} from './styles'
const { dispatch } = store
const APIKey = '9504b6e1d94146f380aa780bb448628a'

const FoundRecipies = props => {
  const numbers = props.recipies
  const AddedIngedents = numbers.map(curRecipie => (
    <div key={curRecipie.id}>
      {curRecipie.title}
      <MyButton onClick={getRecipiesbyId(curRecipie.id)}>
        Go To Recipie
      </MyButton>
    </div>
  ))
  return <ul>{AddedIngedents}</ul>
}

export default connect(mapStateToProps)(FoundRecipies)

export const removeCurIngredient = (e, AddedIngedent) => {
  e.preventDefault()
  dispatch(removeIngredient(AddedIngedent))
}

function mapStateToProps (state) {
  return { recipies: state.recipies }
}

function getRecipiesbyId (curId) {
  fetch(
    'https://cors-anywhere.herokuapp.com/https://api.spoonacular.com/recipes/' +
      curId +
      '/information?' +
      //curId +
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
      response.json().then(value => console.log(value.sourceUrl))
    })
    .catch(err => {
      console.log(err)
    })
}
