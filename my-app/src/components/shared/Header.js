import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <div>
      <NavLink activeStyle={activeStyle} exact to="/">
        Home
      </NavLink>
      <NavLink activeStyle={activeStyle} to="searchRecipie">
        Recipie Search
      </NavLink>
    </div>
  );
};

export default Header;
