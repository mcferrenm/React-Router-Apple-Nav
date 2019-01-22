import React from "react";

import NavWrapper from "./Styles/NavWrapper";

const Nav = ({ category }) => {
  return (
    <NavWrapper>
      <p>{category.title}</p>
    </NavWrapper>
  );
};

export default Nav;
