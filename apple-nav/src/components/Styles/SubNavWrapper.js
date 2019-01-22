import styled from "styled-components";

const SubNavWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  padding: 5rem 0;

  p {
    font-size: 1.2rem;

    color: rgb(49, 49, 49);

    :hover {
      cursor: pointer;
    }
  }
`;

export default SubNavWrapper;
