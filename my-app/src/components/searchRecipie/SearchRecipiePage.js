import React from 'react'
import AddAnIngredientField from './AddAnIngredientField'
import AddedIngredientFields from './AddedIngredientFields'
import SearchRecipieButton from './SearchRecipieButton'
import FoundRecipies from './FoundRecipies'
import { MyPageContainer, MyIngredentContainer } from './styles'

export const HomePage = () => (
  <MyPageContainer>
    <MyIngredentContainer>
      <h2>My Pantry </h2>
      <AddAnIngredientField />
      <AddedIngredientFields />
      <SearchRecipieButton />
    </MyIngredentContainer>
    <FoundRecipies />
  </MyPageContainer>
)

export default HomePage
