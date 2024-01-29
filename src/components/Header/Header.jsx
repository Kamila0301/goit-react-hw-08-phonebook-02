import React from 'react';
import { Link } from 'react-router-dom';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { useAuth } from '../../redux/auth/selectors';
import { HeaderStyle, Linked, LogoText } from './Header.styled';

function Header() {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderStyle>
      <Link to="/">
        <Linked>
          <LogoText>Phonebook</LogoText>
        </Linked>
      </Link>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderStyle>
  );
}
export default Header;
