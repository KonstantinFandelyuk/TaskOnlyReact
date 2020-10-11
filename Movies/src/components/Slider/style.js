import styled from "styled-components";

const DefaultImage = styled.div`
  height: calc(900px - 17px);
  background-image: url("/images/slider/wallpeper.png");
  background-repeat: no-repeat;
  background-position: top center;
  position: relative;
`;
const HeroTitle = styled.h1`
  color: whitesmoke;
  font-size: 13rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-shadow: 6px 4px 3px rgba(0, 0, 0, 0.46);
  text-decoration-color: transparent;
  font-weight: 400;
  width: 80%;
  text-align: center;
`;
export { DefaultImage, HeroTitle };
