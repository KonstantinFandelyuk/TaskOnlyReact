import styled from "styled-components";

export const ModalElement = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1000;
  top: 0;
  left: 0;
  backdrop-filter: blur(8px);
  transition: 0.5s linear;
  display: ${(props) => (props.active ? "flex" : "none")};
`;

export const ModalBGElement = styled.div`
  padding: 40px;
  position: relative;
  background: #fffefd;
  box-shadow: 0px 0px 21px 6px rgba(0, 0, 0, 0.45);
  border-radius: 10px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`;

export const BigImage = styled.img`
  margin-bottom: 20px;
`;

export const CloseModal = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

export const PostForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputText = styled.input`
  margin-bottom: 15px;
  border: 1px solid rgba(0, 77, 255, 0.5);
  height: 30px;
  padding-left: 15px;
`;

export const ButtonForm = styled.button`
  max-width: 300px;
  min-height: 40px;
  color: white;
  background: black;
  margin: 0 auto;
  display: block;
  transition: 0.5s linear;
  padding: 10px;
  &:hover {
    border: 1px solid black;
    background: white;
    transition: 0.5s linear;
    color: black;
  }
`;

export const CommentsInfo = styled.div`
  padding: 20px;
  text-align: left;
`;

export const CommentsDate = styled.div`
  font-weight: 300;
  color: grey;
  margin-bottom: 10px;
`;

export const CommentsText = styled.div`
  font-weight: 500;
`;
