import styled from "styled-components";

const NavWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  padding: 1.6rem;

  a {
    font-size: 1.6rem;
    color: rgb(226, 226, 226);
    text-decoration: none;

    :hover {
      color: rgb(176, 176, 176);
      cursor: pointer;
    }
  }
`;

export default NavWrapper;
