import React from "react";

import Nav from "./Nav";

import NavListWrapper from "./Styles/NavListWrapper";
import NavListContainer from "./Styles/NavListContainer";
import AppleLogo from "./Styles/AppleLogo";
import SearchButton from "./Styles/SearchButton";
import BagButton from "./Styles/BagButton";

const NavList = props => {
  return (
    <NavListWrapper>
      <NavListContainer>
        <AppleLogo />
        {props.categories.map((category, index) => (
          <Nav category={category} key={index} />
        ))}
        <SearchButton />
        <BagButton />
      </NavListContainer>
    </NavListWrapper>
  );
};

export default NavList;
