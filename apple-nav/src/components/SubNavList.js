import React from "react";

import SubNav from "./SubNav";

import SubNavListWrapper from "./Styles/SubNavListWrapper";
import SubNavListContainer from "./Styles/SubNavListContainer";

const SubNavList = props => {
  const category = props.categories.find(
    category => category.title === props.match.params.id
  );

  if (!category) return <h2>Can't find...</h2>;
  return (
    <SubNavListWrapper>
      <SubNavListContainer>
        {category.subCategories.map(subCategory => (
          <SubNav subCategory={subCategory} />
        ))}
      </SubNavListContainer>
    </SubNavListWrapper>
  );
};

export default SubNavList;
