import styled from "styled-components";

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
  border: 1px solid grey;
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

export { Button, Input, TextInfo, Title, LiItem, Label, SpanBold };
