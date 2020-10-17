import styled from "styled-components";

const Item = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid rgba(105, 105, 105, 0.3);
  padding: 10px 0;
  border-radius: 5px;
  margin-bottom: 15px;
  flex: 1 0 33, 3333333%;
`;

const ItemAverage = styled.div`
  border-radius: 50%;
  border: 1px solid black;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemImage = styled.div`
  width: 50px;
`;

export { Item, ItemImage, ItemAverage };
