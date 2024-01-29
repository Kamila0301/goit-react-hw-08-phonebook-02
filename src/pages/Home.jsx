import React from 'react';
import { Main, TextStyled, TextStyled2 } from './Home.styled';

function Home() {
  return (
    <>
      <Main>
        <div>
          <TextStyled>Glad to see you here! This is Phonebook</TextStyled>
          <TextStyled2>PLEASE LOG IN OR REGISTER FOR SEARCHING</TextStyled2>
        </div>
      </Main>
    </>
  );
}

export default Home;
