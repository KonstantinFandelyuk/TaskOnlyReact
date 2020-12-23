import styled from "styled-components";

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
