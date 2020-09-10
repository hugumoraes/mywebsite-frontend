import React from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import { Container, Post } from './styles';

import Header from '../../components/Header';

export default function Blogpost({ data }) {
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
      </Post>
    </Container>
  );
}
