import styled from "styled-components";

export const UserProfileBlock = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background: red;
`;

export const Form = styled.form`
  background-color: white;
  padding: 15px;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.22);
`;

export const Title = styled.div`
  font-size: 3rem;
  margin-bottom: 15px;
  text-align: center;
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  margin-right: 15px;
`;

export const Input = styled.input`
  margin-left: 15px;
  margin-bottom: 10px;
  border: 1px solid lightgray;
`;

export const Button = styled.button`
  padding: 20px;
  background: transparent;
  border: 1px solid lightgray;
  transition: 0.4s linear;
  &:focus,
  &:hover {
    background: black;
    color: white;
    transition: 0.4s linear;
  }
`;
