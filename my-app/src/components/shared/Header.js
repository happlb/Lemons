import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from '../searchRecipie/styles'
const Header = () => {
  const activeStyle = { color: '#F15B2A' }
  return (
    <Nav>
      <NavLink
        style={{ paddingRight: '15px' }}
        activeStyle={activeStyle}
        exact
        to='/'
      >
        Home
      </NavLink>
      <NavLink activeStyle={activeStyle} to='searchRecipie'>
        Recipie Search
      </NavLink>
    </Nav>
  )
}

export default Header
