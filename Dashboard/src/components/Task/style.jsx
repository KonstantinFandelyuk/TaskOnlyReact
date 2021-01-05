import styled from "styled-components";

export const TaskBlock = styled.div`
  padding: 40px 20px;
  position: relative;
`;

export const HeroTitle = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

export const BoardList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const BoardItem = styled.li`
  min-width: 250px;
  min-height: 200px;
  border: 1px solid lightgray;
  padding: 15px;
  border-radius: 5px;
  box-shadow: -1px 0px 14px 1px rgba(0, 0, 0, 0.15);
`;

export const BoardTitle = styled.div`
  font-size: 2.2rem;
  margin-bottom: 20px;
  text-align: center;
  user-select: none;
`;

export const BoardAdd = styled.button`
  background: transparent;
  border-radius: 100%;
  border: 1px solid lightgray;
`;

export const TaskItem = styled.div`
  border: 1px solid #070707;
  padding: 10px;
  border-radius: 5px;
  cursor: grab;
  margin-bottom: 10px;
`;

export const TaskInput = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background: white;
  box-shadow: -1px 0px 14px 1px rgba(0, 0, 0, 0.15);
  padding: 20px;
  display: ${(props) => (props.open ? "block" : "none")};
`;

export const TaskInputTitle = styled.div`
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

export const TaskInputClose = styled.span`
  position: absolute;
  right: 5px;
  top: 5px;
  font-size: 1.8rem;
  border: 1px solid lightgrey;
  border-radius: 100%;
  padding: 5px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
