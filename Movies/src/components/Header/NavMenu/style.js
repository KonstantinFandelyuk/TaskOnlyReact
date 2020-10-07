import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transition: 0.5s linear;
`;

const NavListDropDown = styled.ul`
  visibility: hidden;
  position: absolute;
  top: 27px;
  left: -6px;
  width: 165px;
  background: white;
  color: black;
  border-radius: 5px;
  padding: 10px 5px;
  transition: 0.5s linear;
  opacity: 0;
  z-index: 2;
`;

const NavListItem = styled.li`
  margin-right: ${(props) => (props.dropLi ? "0" : "45px")};
  position: relative;
  margin-bottom: ${(props) => (props.dropLi ? "10px" : "0")};
  &:hover > .dropDown {
    opacity: 1;
    visibility: visible;
    transition: 0.5s linear;
  }
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

export { NavList, NavListItem, HeaderForm, SerachInput, LinkSpan, NavListDropDown };
