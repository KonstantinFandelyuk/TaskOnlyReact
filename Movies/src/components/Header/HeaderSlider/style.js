import styled from 'styled-components';

const SwiperContainer = styled.div`
  width: 100%;
  height: 700px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  /* Fix of Webkit flickering */
  z-index: 1;
`;

const SwiperWrapper = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
`;

const SlideItem = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 700px;
  position: relative;
  transition-property: transform;
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
export { SwiperContainer, SwiperWrapper, SlideItem, HeroTitle };
