import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../redux/auth/operations';
import { useAuth } from '../redux/auth/selectors';
import { AddButton, Username } from './ContactForm/ContactForm.styled';

function UserMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/', { replace: true });
  };
  const { userName } = useAuth();
  return (
    <div>
      <Username>Welcome, {userName}</Username>
      <div>
        {/* <Link to="/contacts">Contacts</Link> */}
        <AddButton type="button" onClick={handleLogOut}>
          Logout
        </AddButton>
      </div>
    </div>
  );
}
export default UserMenu;
