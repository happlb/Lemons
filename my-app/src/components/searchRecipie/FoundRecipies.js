import React from 'react'
import store from '../../store'
import { connect } from 'react-redux'
import { removeIngredient } from '../../store/reducers/recipies'
import { MyRecipieContainer, MyButton } from './styles'
const { dispatch } = store
const APIKey = '9504b6e1d94146f380aa780bb448628a'

const FoundRecipies = props => {
  const recipies = props.recipies.length ? props.recipies : []
  const AddedRecipies = recipies.map(curRecipie => (
    <div key={curRecipie.id}>
      <MyRecipieContainer onClick={e => getRecipiesbyId(curRecipie.id)}>
        <img src={curRecipie.image} />
        <div>
          <h3>{curRecipie.title}</h3>

          <h4 style={{ marginBottom: 'unset' }}>Ingredients:</h4>
          <div>
            {curRecipie.usedIngredients.map(usedIngredient => (
              <div key={usedIngredient.original}>{usedIngredient.original}</div>
            ))}
            {curRecipie.missedIngredients.map(missingIngredient => (
              <div style={{ color: 'red' }} key={missingIngredient.original}>
                {missingIngredient.original}
              </div>
            ))}
          </div>
        </div>
      </MyRecipieContainer>
    </div>
  ))
  return <div>{AddedRecipies}</div>
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
      response.json().then(value => {
        if (value.sourceUrl) {
          window.open(value.sourceUrl)
        }
      })
    })
    .catch(err => {
      console.log(err)
    })
}
