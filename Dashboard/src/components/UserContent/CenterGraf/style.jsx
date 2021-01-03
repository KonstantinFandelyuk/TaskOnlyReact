import styled from "styled-components";

export const GrafBig = styled.div`
  max-width: 450px;
  height: auto;
  background: white;
  border-radius: 20px;
  margin-right: 40px;
  box-shadow: 0px 0px 11px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  color: ${(props) => (props.theme.mode === "dark" ? "#2d2d2d" : "black")};
`;

export const GrafTittle = styled.div`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
`;

export const ButtonList = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  background: transparent;
  padding: 5px 20px;
  border: 1px solid lightgray;
  border-radius: 5px;
  transition: 0.5s linear;
  &:hover {
    transition: 0.5s linear;
    background: #3b3b3b;
    color: white;
    font-weight: bold;
  }
  &.active {
    background: #3b3b3b;
    color: white;
  }
`;

export const RatingList = styled.ul`
  margin-bottom: 20px;
`;

export const RatingTitle = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const RatingItem = styled.li`
  margin-bottom: 10px;
  user-select: none;
  &:last-child {
    margin-bottom: 0;
  }
`;
