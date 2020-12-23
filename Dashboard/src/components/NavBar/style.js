import styled from "styled-components";

export const Nav = styled.nav`
  padding: 30px;
  background-color: white;
  height: 100vh;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

export const Item = styled.li`
  max-width: 35px;
  cursor: pointer;
`;

export const ItemProfile = styled(Item)`
  border-radius: 50%;
  overflow: hidden;
  &img {
    object-fit: cover;
  }
`;
