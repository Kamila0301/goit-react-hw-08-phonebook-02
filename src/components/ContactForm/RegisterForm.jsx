import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { StyledForm, StyledLabel, StyledInput } from './LoginForm.styled';
import { AddButton } from './ContactForm.styled';
import React from 'react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <StyledLabel>
        Username
        <StyledInput type="text" name="name" />
      </StyledLabel>
      <StyledLabel>
        Email
        <StyledInput type="email" name="email" />
      </StyledLabel>
      <StyledLabel>
        Password
        <StyledInput type="password" name="password" />
      </StyledLabel>
      <AddButton type="submit">Register</AddButton>
    </StyledForm>
  );
};
