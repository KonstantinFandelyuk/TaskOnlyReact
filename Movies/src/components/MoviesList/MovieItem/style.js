import styled from 'styled-components';

const FilmItem = styled.li`
  position: relative;
  max-width: 220px;
  margin-bottom: 25px;
  box-shadow: 0px 0px 9px 2px rgba(0, 0, 0, 0.05);
  transition: 0.5s linear;
  padding: 10px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 9px 2px rgba(0, 0, 0, 0.2);
    transition: 0.5s linear;
    transform: scale(1.05);
  }
`;

const FilmImage = styled.div`
  border-radius: 6px;
  overflow: hidden;
`;

const FilmAverage = styled.div`
  position: absolute;
  top: -15px;
  right: -10px;
  border-radius: 50%;
  /* width: 40px; */
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 500;
  /* background: white; */
  height: 20px;
  background: linear-gradient(to right, black 40%, transparent 0);
  background-color: green;
  font-weight: 900;
  width: 30px;
  height: 30px;
  /* background-image: conic-gradient(deeppink 10%, transparent 0); */
  background-image: ${(props) => `conic-gradient(black ${props.average}%, transparent 0)`};
  border-radius: 50%;
  border: 1px solid whitesmoke;
`;

const FilmName = styled.div`
  text-align: center;
  padding: 8px;
  font-weight: bold;
  font-size: 1.5rem;
`;

const FilmFavorite = styled.div`
  position: absolute;
  max-width: 30px;
  top: -3%;
  left: -4%;
  z-index: 10;
`;

const FilmDate = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  border: 1px solid #a7a7a757;
  padding: 5px;
`;

export { FilmItem, FilmImage, FilmAverage, FilmName, FilmDate, FilmFavorite };
