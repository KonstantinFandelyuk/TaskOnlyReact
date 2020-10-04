import styled from "styled-components";

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
  left: -10px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-weight: 500;
  background: white;
`;

const FilmName = styled.div`
  text-align: center;
  padding: 8px;
  font-weight: bold;
  font-size: 1.5rem;
`;

const FilmDate = styled.div`
  position: absolute;
  top: -12px;
  right: 8px;
  border-radius: 5px;
  background: white;
  border: 1px solid #a7a7a757;
  padding: 5px;
`;

export { FilmItem, FilmImage, FilmAverage, FilmName, FilmDate };
