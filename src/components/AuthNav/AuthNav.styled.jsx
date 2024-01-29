import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 8px 16px;
  margin-bottom: 16px;

  > nav {
    display: flex;
  }
`;

export const ListStyle = styled.ul`
  display: flex;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const NavigationLink = styled(NavLink)`
  min-width: 70px;
  padding: 8px;
  border-radius: 6px;
  text-decoration: none;
  font-style: inherit;
  color: orangered;
  transition: font-size 0.3s, text-decoration 0.3s;
  &:focus,
  &:hover {
    font-size: 18px;
    text-decoration: underline;
  }
`;
