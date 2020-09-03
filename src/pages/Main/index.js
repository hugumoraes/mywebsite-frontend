import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import ProjectsUI from '../../components/ProjectsUI';

function Main() {
  return (
    <>
      <Header />
      <Container>
        <ProjectsUI />
        <ProjectsUI divName="Blog" />
      </Container>
      <Footer />
    </>
  );
}

export default Main;
