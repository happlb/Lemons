import { createReducer, createAction } from '@reduxjs/toolkit'

const initState = {
  veg: false,
  ingredents: [],
  recipies: [
    {
      image: 'https://spoonacular.com/recipeImages/716429-312x231.jpg',
      title: 'beans',
      id: '1',
      usedIngredients: [
        {
          aisle: 'Produce',
          amount: 6.0,
          id: 9003,
          image: 'https://spoonacular.com/cdn/ingredients_100x100/apple.jpg',
          meta: [],
          name: 'apples',
          original: '6 large baking apples',
          originalName: 'baking apples',
          unit: 'large',
          unitLong: 'larges',
          unitShort: 'large'
        }
      ],
      missedIngredients: [
        {
          aisle: 'Baking',
          amount: 1.0,
          id: 18371,
          image:
            'https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg',
          meta: [],
          name: 'baking powder',
          original: '1 tsp baking powder',
          originalName: 'baking powder',
          unit: 'tsp',
          unitLong: 'teaspoon',
          unitShort: 'tsp'
        },
        {
          aisle: 'Spices and Seasonings',
          amount: 1.0,
          id: 2010,
          image: 'https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg',
          meta: [],
          name: 'cinnamon',
          original: '1 tsp cinnamon',
          originalName: 'cinnamon',
          unit: 'tsp',
          unitLong: 'teaspoon',
          unitShort: 'tsp'
        },
        {
          aisle: 'Milk, Eggs, Other Dairy',
          amount: 1.0,
          id: 1123,
          image: 'https://spoonacular.com/cdn/ingredients_100x100/egg.png',
          meta: [],
          name: 'egg',
          original: '1 egg',
          originalName: 'egg',
          unit: '',
          unitLong: '',
          unitShort: ''
        }
      ]
    },
    {
      image: 'https://spoonacular.com/recipeImages/716429-312x231.jpg',
      title: 'beans again',
      id: '2',
      usedIngredients: [],
      missedIngredients: []
    }
  ]
}

export default createReducer(initState, {
  addRecipies: (state, { payload }) => {
    state.recipies = payload ? payload : []
  },
  updateIngredients: (state, { payload }) => {
    state.ingredents = payload
  },
  removeIngredient: (state, { payload }) => {
    if (state.ingredents.includes(payload)) {
      state.ingredents.splice(state.ingredents.indexOf(payload), 1)
    }
  },
  addIngredient: (state, { payload }) => {
    if (payload && !state.ingredents.includes(payload)) {
      state.ingredents.push(payload)
    }
  },
  setVeg: (state, { payload }) => {
    state.veg = payload
  }
})

export const addRecipies = createAction('addRecipies')
export const updateIngredients = createAction('updateIngredients')
export const removeIngredient = createAction('removeIngredient')
export const addIngredient = createAction('addIngredient')
export const setVeg = createAction('setVeg')
