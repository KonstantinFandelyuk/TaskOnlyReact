import styled from "styled-components";

const Favorite = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1000;
  top: 0;
  left: 0;
  backdrop-filter: blur(8px);
  transition: 0.5s linear;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.5s linear;
`;

const FavoriteBG = styled.div`
  background: white;
  max-width: 1200px;
  padding: 20px;
  position: relative;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.52);
  color: black;
  border-radius: 4px;
  position: relative;
`;

const FavoriteTitle = styled.div`
  font-size: 5rem;
  margin-bottom: 20px;
`;

const ModalClose = styled.div`
  position: absolute;
  top: -15px;
  right: -15px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: red;
  color: white;
`;

export { Favorite, FavoriteBG, FavoriteTitle, ModalClose };
