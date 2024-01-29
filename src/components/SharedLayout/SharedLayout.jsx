import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Main } from './SharedLayout.styled';
import Header from '../Header/Header';
import { Loader } from '../Loader/Loader';

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};
export default SharedLayout;
