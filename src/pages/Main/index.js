import React from 'react';

import Header from '../../components/Header';
import Container from '../../components/Container';
import MainUI from '../../components/MainUI';

function Main() {
  return (
    <>
      <Header />
      <Container>
        <MainUI divName="Portfolio" />
      </Container>
    </>
  );
}

export default Main;
