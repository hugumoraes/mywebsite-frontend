import React, { useState, useEffect } from 'react';

import strapi from '../../services/strapi';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import ProjectsUI from '../../components/ProjectsUI';
import BlogUI from '../../components/BlogUI/index';

interface IBlogpost {
  id: string;
  title: string;
  content: string;
  published: string;
  createdAt: string;
  cover: any;
}

const Main: React.FC = () => {
  const [blogposts, setBlogposts] = useState<IBlogpost[]>([]);

  useEffect(() => {
    strapi
      .get('/posts?_limit=3&_sort=createdAt:DESC')
      .then((response) => setBlogposts(response.data));
  }, []);

  return (
    <>
      <Header />
      <Container>
        <ProjectsUI />
        <BlogUI blogposts={blogposts} />
      </Container>
      <Footer />
    </>
  );
};

export default Main;
