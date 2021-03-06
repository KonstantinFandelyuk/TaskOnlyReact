import styled from 'styled-components';

const ModalElement = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1000;
  top: 0;
  left: 0;
  backdrop-filter: blur(8px);
  transition: 0.5s linear;
  display: ${(props) => (props.active ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  transition: 0.5s linear;
`;

const ModalBG = styled.div`
  background: white;
  max-width: 1200px;
  padding: 20px;
  position: relative;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.52);
`;

const TopBlock = styled.div`
  background-image: ${(props) =>
    `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${props.image})`};
  background-repeat: no-repeat;
  background-position: top center;
  position: relative;
  display: flex;
  justify-content: flex-end;
  /* align-items: center; */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom right, rgb(29 16 16 / 66%), rgb(43 43 43 / 93%));
  }
  z-index: 1;
`;

const TopBlockItem = styled.div`
  z-index: 2;
  color: white;
  flex-basis: ${(props) => (props.first ? '35%' : '80%')};
  padding: ${(props) => (props.first ? '10px' : '0')};
  margin: ${(props) => (props.first ? 'auto' : '0')};
`;

const Text = styled.div`
  font-size: ${(props) => (props.title ? '3rem' : '1.6rem')};
  text-align: center;
  margin: 20px 0;
`;
const GenresContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -5px;
`;
const GenresItem = styled.li`
  padding: 5px;
  border: 1px solid grey;
  margin-left: 5px;
  cursor: pointer;
  transition: 0.6s linear;
  &:hover {
    background: grey;
    color: white;
    transition: 0.6s linear;
    border: 1px solid white;
  }
`;

const SeasonsContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SeasonsItem = styled.li``;

const ModalClose = styled.div`
  position: absolute;
  top: -15px;
  right: -15px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: black;
  color: white;
`;

export {
  ModalElement,
  ModalBG,
  TopBlock,
  TopBlockItem,
  Text,
  GenresContainer,
  GenresItem,
  SeasonsContainer,
  SeasonsItem,
  ModalClose,
};
