import React from "react";

import Nav from "./Nav";
import SubNav from "./SubNav";

import NavListContainer from "./Styles/NavListContainer";
import NavListWrapper from "./Styles/NavListWrapper";
import AppleLogo from "./Styles/AppleLogo";
import SearchButton from "./Styles/SearchButton";
import BagButton from "./Styles/BagButton";

const NavList = props => {
  return (
    <NavListContainer>
      <NavListWrapper>
        <AppleLogo />
        {props.categories.map(category => (
          <Nav category={category} />
        ))}
        <SearchButton />
        <BagButton />
      </NavListWrapper>
      <SubNav />
    </NavListContainer>
  );
};

export default NavList;
