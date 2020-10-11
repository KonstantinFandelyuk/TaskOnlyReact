import styled from "styled-components";

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ItemName = styled.div`
  color: black;
`;

const ItemImage = styled.div`
  max-width: 50px;
`;

export { Item, ItemName, ItemImage };
