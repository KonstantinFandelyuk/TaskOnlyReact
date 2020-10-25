import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #032541;
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterTitle = styled.div`
  color: white;
  font-weight: bolder;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 130%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 1px;
    background: white;
  }
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -30%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 1px;
    background: white;
  }
`;

export { FooterContainer, FooterTitle };
