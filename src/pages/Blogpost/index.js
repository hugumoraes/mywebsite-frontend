import React from 'react';
import ReactMarkdown from 'react-markdown';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import { Container, Post } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Blogpost({ data }) {
  const maxWidth = window.innerWidth;

  const renderers = {
    image: ({ alt, src, title }) => (
      <img
        alt={alt}
        src={src}
        title={title}
        style={{ maxWidth: Math.min(420, maxWidth), padding: '16px' }}
      />
    ),
  };

  const date = parseISO(data.createdAt);

  return (
    <Container>
      <Header />

      <Post>
        <h1>{data.Title}</h1>
        <span>
          {format(date, "dd 'de' MMMM' às ' HH:mm", {
            locale: pt,
          })}
        </span>
        <ReactMarkdown
          source={data.Content}
          escapeHtml={false}
          renderers={renderers}
        />
      </Post>

      <Footer />
    </Container>
  );
}
