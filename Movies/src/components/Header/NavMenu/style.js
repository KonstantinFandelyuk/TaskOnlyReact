import styled from 'styled-components';

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
  margin-right: ${(props) => (props.dropLi ? '0' : '45px')};
  position: relative;
  margin-bottom: ${(props) => (props.dropLi ? '10px' : '0')};
  &:hover > .dropDown {
    opacity: 1;
    visibility: visible;
    transition: 0.5s linear;
  }
`;

const HeaderForm = styled.form`
  position: relative;
  &::after {
    content: '';
    background-image: url('/images/icons/search.png');
    background-repeat: no-repeat;
    position: absolute;
    top: 50%;
    right: 0%;
    transform: translate(-50%, -50%);
    width: 25px;
    height: 25px;
  }
`;

const SerachInput = styled.input`
  height: 15px;
  width: 300px;
  height: 30px;
  border: none;
  padding: 10px;
  position: relative;
  transition: 0.5s linear;
  &:focus {
    border-radius: 10px 10px 0px 0px;
    transition: 0.5s linear;
  }
`;

const LinkSpan = styled.span`
  color: white;
`;

const LanSwitch = styled.div`
  cursor: pointer;
`;

const ThemeSwitch = styled.div`
  cursor: pointer;
  background-image: ${(props) =>
    props.colorTheme
      ? 'url(../images/header/theme/white.png)'
      : 'url(../images/header/theme/dark.png)'};
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
`;

const Favorites = styled.div`
  width: 40px;
  cursor: pointer;
`;

export {
  NavList,
  NavListItem,
  HeaderForm,
  SerachInput,
  LinkSpan,
  NavListDropDown,
  LanSwitch,
  Favorites,
  ThemeSwitch,
};
