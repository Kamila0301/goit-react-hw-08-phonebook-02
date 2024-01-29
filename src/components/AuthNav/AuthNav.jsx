import React from 'react';
import { Header, ListStyle, Link } from './AuthNav.styled';

function AuthNav() {
  return (
    <Header>
      <ListStyle>
        <nav>
          <Link to="/login">Log In</Link>
          <Link to="/register">Register</Link>
        </nav>
      </ListStyle>
    </Header>
  );
}
export default AuthNav;
