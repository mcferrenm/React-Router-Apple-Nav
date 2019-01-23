import styled from "styled-components";

const NavWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;

  a {
    font-size: 1.6rem;
    color: rgb(226, 226, 226);
    text-decoration: none;
    padding: 1.6rem;

    :hover {
      color: rgb(176, 176, 176);
      cursor: pointer;
    }
  }

  .nav-active {
    color: rgb(200, 200, 200);
  }
`;

export default NavWrapper;
