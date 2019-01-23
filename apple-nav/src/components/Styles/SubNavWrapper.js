import styled from "styled-components";

const SubNavWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;

  p {
    font-size: 1.2rem;
    color: ${props =>
      props.theme === "dark" ? "rgb(246, 246, 246)" : "rgb(49, 49, 49)"};
    :hover {
      cursor: pointer;
    }
  }

  figure {
    background-image: url(${props => props.icon});
    width: 46px;
    height: 54px;
    background-size: 46px 54px;
    background-repeat: no-repeat;
    margin: 0 auto;
  }
`;

export default SubNavWrapper;
