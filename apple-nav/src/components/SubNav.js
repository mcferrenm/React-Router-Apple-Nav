import React from "react";

import SubNavWrapper from "./Styles/SubNavWrapper";

const SubNav = props => {
  return (
    <SubNavWrapper>
      <p>{props.subCategory.title}</p>
    </SubNavWrapper>
  );
};

export default SubNav;
