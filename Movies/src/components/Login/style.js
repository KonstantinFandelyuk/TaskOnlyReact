import styled from 'styled-components';

const LoginUser = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1000;
  top: 0;
  left: 0;
  backdrop-filter: blur(8px);
  transition: 0.5s linear;
  display: flex;
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

const LiItem = styled.li`
  position: relative;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Label = styled.label`
  position: absolute;
  top: 46px;
  left: 6px;
  font-size: 1.3rem;
  color: red;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
`;

const Button = styled.button`
  display: block;
  margin: 0 auto 20px auto;
  max-height: 70px;
  background: transparent;
  border: 1px solid black;
  padding: 15px 60px;
  transition: 0.5s linear;
  font-weight: 800;
  &:hover {
    transition: 0.5s linear;
    background: black;
    color: white;
  }
`;

const TextInfo = styled.span`
  display: block;
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
`;

const SpanBold = styled.span`
  font-weight: 800;
`;

export { LoginUser, ModalBG, Button, Input, TextInfo, Title, LiItem, Label, SpanBold };
