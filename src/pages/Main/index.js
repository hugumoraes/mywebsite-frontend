import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import ProjectsUI from '../../components/ProjectsUI';
import BlogUI from '../../components/BlogUI';

function Main() {
  return (
    <>
      <Header />
      <Container>
        <ProjectsUI />
        <BlogUI />
      </Container>
      <Footer />
    </>
  );
}

export default Main;
