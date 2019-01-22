import React from "react";

import Nav from "./Nav";
import NavListContainer from "./Styles/NavListContainer";

import AppleLogo from "./Styles/AppleLogo";
import SearchButton from "./Styles/SearchButton";
import BagButton from "./Styles/BagButton";

const NavList = props => {
  return (
    <NavListContainer>
      <AppleLogo />
      {props.categories.map(category => (
        <Nav category={category} />
      ))}
      <SearchButton />
      <BagButton />
    </NavListContainer>
  );
};

export default NavList;
