import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { StyledForm, StyledLabel, StyledInput } from './LoginForm.styled';
import { AddButton } from './ContactForm.styled';
import React from 'react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    //   .then(resp => {
    //     return alert(`Successfully logged in as ${resp.user.name}`);
    //   })
    //   .catch(error => {
    //     error === 'Request failed with status code 400'
    //       ? alert('Wrong email or password')
    //       : alert('Wrong email or password');
    //   });
    // form.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <StyledLabel>
        Email
        <StyledInput type="email" name="email" placeholder="Enter your email" />
      </StyledLabel>
      <StyledLabel>
        Password
        <StyledInput
          type="password"
          name="password"
          placeholder="Enter your name"
        />
      </StyledLabel>
      <AddButton type="submit">Log In</AddButton>
    </StyledForm>
  );
};
