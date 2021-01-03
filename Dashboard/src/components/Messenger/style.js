import styled from "styled-components";

export const MessengerBG = styled.div`
  padding: 30px;
  background: ${(props) => (props.theme.mode === "dark" ? "#2d2d2d" : "white")};
  width: 300px;
  height: 100vh;
  overflow: hidden;
  position: relative;
  right: ${(props) => (props.active ? "0" : "-500px")};
  transition: 0.5s linear;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "black")};
`;

export const TitleText = styled.div`
  font-size: 2rem;
  font-weight: 800;
`;

export const TitleButton = styled.button`
  font-size: 1.3rem;
  text-transform: uppercase;
  background: transparent;
  padding: 10px 30px;
  border: 1px solid grey;
  border-radius: 20px;
  color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "black")};
`;

export const Card = styled.li`
  display: flex;
  margin-bottom: 25px;
  user-select: none;
`;

export const CardImage = styled.div`
  cursor: pointer;
  max-width: 40px;
  margin-right: 15px;
  position: relative;
  & img {
    border-radius: 50%;
    overflow: hidden;
  }
  &::after {
    content: "";
    background: ${(props) => (props.active ? "green" : "grey")};
    border-radius: 50%;
    position: absolute;
    bottom: 1px;
    right: 1px;
    width: 10px;
    height: 10px;
  }
`;

export const CardTextContainer = styled.div`
  cursor: pointer;
  margin-right: auto;
  padding: 2px 0;
`;

export const CardUserName = styled.div`
  color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "grey")};
  margin-bottom: 5px;
  font-weight: 600;
`;

export const CardUserText = styled(CardUserName)`
  font-size: 1.3rem;
  opacity: 0.7;
  font-weight: 400;
`;

export const CardUserVisit = styled(CardUserName)`
  font-size: 1.3rem;
  opacity: 0.7;
  font-weight: 400;
`;
