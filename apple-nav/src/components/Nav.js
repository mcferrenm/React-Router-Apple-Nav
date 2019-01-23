import React from "react";

import { NavLink } from "react-router-dom";

import NavWrapper from "./Styles/NavWrapper";

const Nav = ({ category }) => {
  return (
    <NavWrapper>
      <NavLink to={`/${category.title}`} activeClassName="nav-active">
        {category.title}
      </NavLink>
    </NavWrapper>
  );
};

export default Nav;
