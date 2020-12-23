import styled from "styled-components";

export const DashboardBG = styled.div`
  border-radius: 30px;
  box-shadow: 0px 0px 11px 4px rgba(0, 0, 0, 0.15);
  margin: 5px 10px;
  height: 98.5vh;
  overflow: hidden;
  background-color: ${(props) => (props.theme.mode === "dark" ? "#2d2d2d" : "#F5F6F7")};
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const Item = styled.li`
  flex-shrink: 0;
`;

export const ItemCenter = styled(Item)`
  flex-grow: 2;
`;
