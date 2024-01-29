import React from 'react';
import { LoginForm } from '../components/ContactForm/LoginForm';

import { NavigationLink } from '../components/AuthNav/AuthNav.styled';

function Login() {
  return (
    <>
      <h3>Login to your account</h3>
      <LoginForm />
      <h4>
        Or<NavigationLink to="/register">Register</NavigationLink> to create a
        new account
      </h4>
    </>
  );
}

export default Login;
