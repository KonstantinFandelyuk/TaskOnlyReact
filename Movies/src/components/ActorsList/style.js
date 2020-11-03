import styled from 'styled-components';

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  text-align: start;
`;

const H2Title = styled.h2`
  text-align: center;
  font-size: 5rem;
  font-weight: 400;
  margin-bottom: 40px;
  color: ${(props) => (props.colorTheme ? 'white' : 'black')};
`;
export { NavList, H2Title };
