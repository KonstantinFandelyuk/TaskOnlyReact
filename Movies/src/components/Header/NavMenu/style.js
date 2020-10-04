import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const NavListItem = styled.li`
  margin-right: 45px;
`;
const HeaderForm = styled.form`
  position: relative;
`;

const SerachInput = styled.input`
  height: 15px;
  width: 250px;
  border-radius: 5px;
  border: none;
  padding: 10px;
`;

const LinkSpan = styled.span`
  color: white;
`;

export { NavList, NavListItem, HeaderForm, SerachInput, LinkSpan };
