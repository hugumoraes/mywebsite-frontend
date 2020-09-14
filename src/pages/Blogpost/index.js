import React from 'react';
import ReactMarkdown from 'react-markdown';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import { Container, Post } from './styles';

import Header from '../../components/Header';

export default function Blogpost({ data }) {
  const maxWidth = window.innerWidth;

  const renderers = {
    image: ({
      alt,
      src,
      title,
    }: {
      alt?: string,
      src?: string,
      title?: string,
    }) => (
      <img
        alt={alt}
        src={src}
        title={title}
        style={{ maxWidth: Math.min(420, maxWidth) }}
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
    </Container>
  );
}
