import React from "react";

import SubNavWrapper from "./Styles/SubNavWrapper";

const SubNav = props => {
  return (
    <SubNavWrapper icon={props.subCategory.icon} theme={props.theme}>
      <p>{props.subCategory.title}</p>
      <figure />
    </SubNavWrapper>
  );
};

export default SubNav;
