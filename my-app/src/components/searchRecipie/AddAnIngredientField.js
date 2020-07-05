import React from 'react'
import store from '../../store'
import { addIngredient, setVeg } from '../../store/reducers/recipies'

const { dispatch } = store
var ingredent = ''
var veg = false
const AddAnIngredientField = () => (
  <div>
    <div>
      <input
        style={{ marginBottom: '15px' }}
        type='checkbox'
        id='veg'
        name='veg'
        onClick={e => setVegRecipies(e)}
      />
      Vegetarian
    </div>
    <form>
      <label>
        Add an Ingredient:
        <input
          type='text'
          name='name'
          onChange={e => (ingredent = e.target.value)}
        />
      </label>
      <input
        style={{ marginLeft: '5px' }}
        type='submit'
        value='Add'
        onClick={e => setRecipies(e)}
      />
    </form>
  </div>
)

export default AddAnIngredientField

export const setRecipies = event => {
  event.preventDefault()
  dispatch(addIngredient(ingredent))
}

export const setVegRecipies = e => {
  veg = !veg
  dispatch(setVeg(e.target.checked))
}
