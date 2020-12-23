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
