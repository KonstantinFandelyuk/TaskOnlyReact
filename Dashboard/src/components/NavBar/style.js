import styled from "styled-components";

export const Nav = styled.nav`
  padding: 30px;
  background-color: white;
  height: 100vh;
`;

export const List = styled.ul`
  margin-bottom: 80px;
`;

export const Item = styled.li`
  max-width: 35px;
  margin-bottom: 50px;
  cursor: pointer;
`;

export const ItemLogo = styled(Item)`
  margin-bottom: 60px;
`;

export const ItemProfile = styled(Item)`
  border-radius: 50%;
  overflow: hidden;
`;
