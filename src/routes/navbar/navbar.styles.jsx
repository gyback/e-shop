import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  display: flex;
  justify-content: center;
  padding: 10px 0 0 10px;
`;

export const NavLinksContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const NavLink = styled(Link)`
  text-transform: uppercase;
  padding: 10px 15px;
  cursor: pointer;
`