import styled from "styled-components";

export const ChatBlock = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #5f5e5e6e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ChatBG = styled.div`
  padding: 10px;
  background: white;
  border-radius: 4px;
`;

export const Title = styled.div`
  margin-bottom: 15px;
  font-size: 2rem;
  text-align: center;
`;

export const ChatMsg = styled.li`
  text-align: ${(props) => (props.right ? "right" : "left")};
`;

export const Name = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 1.6rem;
`;

export const Time = styled.div`
  margin-bottom: 5px;
  font-size: 1.2rem;
`;

export const Msg = styled.div`
  padding: 4px 5px;
  border-radius: 10px;
  border: 1px solid lightgray;
  display: inline-block;
  margin-bottom: 5px;
`;
