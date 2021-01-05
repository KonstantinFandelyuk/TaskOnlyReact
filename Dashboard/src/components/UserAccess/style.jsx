import styled from "styled-components";

const LoginUser = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1000;
  top: 0;
  left: 0;
  backdrop-filter: blur(8px);
  transition: 0.5s linear;
  display: grid;
  place-items: center;
  transition: 0.5s linear;
`;

const ModalBG = styled.div`
  border-radius: 15px;
  background: white;
  max-width: 1200px;
  padding: 20px;
  position: relative;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.52);
`;

const ButtonList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
`;

const Button = styled.button`
  display: block;
  max-height: 30px;
  background: transparent;
  transition: 0.5s linear;
  font-weight: 800;
  border-radius: 10px;
  padding: 5px 8px;
  &:hover {
    padding: 5px 8px;
    border-radius: 10px;
    transition: 0.5s linear;
    background: black;
    color: white;
  }
`;

const TextInfo = styled.span`
  display: block;
  padding: 10px 0;
`;

export { LoginUser, ModalBG, Button, TextInfo, ButtonList };
