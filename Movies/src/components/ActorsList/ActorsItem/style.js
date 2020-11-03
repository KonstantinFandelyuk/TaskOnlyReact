import styled from 'styled-components';

const NavListItem = styled.li`
  margin-bottom: 15px;
`;

const ActorCard = styled.div`
  box-shadow: 0px 0px 15px 4px rgba(0, 0, 0, 0.18);
  border-radius: 5px;
  position: relative;
`;

const Drpo = styled.div`
  visibility: hidden;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 125px;
  background: black;
  color: white;
  border-radius: 5px;
  padding: 10px 5px;
  transition: 0.5s linear;
  opacity: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
`;

const ActorInfo = styled.div`
  position: absolute;
  bottom: 7px;
  right: 5px;
  border-radius: 50%;
  background: black;
  width: 25px;
  height: 25px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  user-select: none;

  &:hover + .infoAcmenu {
    opacity: 1;
    visibility: visible;
    transition: 0.5s linear;
  }
`;

const ActorName = styled.div`
  font-weight: bold;
  font-size: 1.8rem;
  padding: 10px;
`;

export { NavListItem, ActorName, ActorCard, ActorInfo, Drpo };
