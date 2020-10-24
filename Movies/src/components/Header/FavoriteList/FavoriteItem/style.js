import styled from 'styled-components';

const Item = styled.li`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  gap: 1px 1px;
  grid-template-areas: '. . .';
  padding: 10px 0;
  border-radius: 5px;
  margin-bottom: 15px;
  border: 1px solid rgba(105, 105, 105, 0.3);
  align-items: center;
  justify-items: center;
`;

const ItemAverage = styled.div`
  border-radius: 50%;
  border: 1px solid black;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemImage = styled.div`
  width: 50px;
`;

export { Item, ItemImage, ItemAverage };
