import React from 'react';
import ReactMarkdown from 'react-markdown';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import { Container, Post } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import CodeBlock from '../../util/CodeBlock';

interface IBlogpost {
  id: string;
  title: string;
  content: string;
  published: string;
  createdAt: string;
}

interface Props {
  data: IBlogpost;
}

const Blogpost: React.FC<Props> = ({ data }) => {
  const maxWidth = window.innerWidth;

  const renderers = {
    code: CodeBlock,
    image: ({
      alt,
      src,
      title,
    }: {
      alt?: string;
      src?: string;
      title?: string;
    }) => (
      <img
        alt={alt}
        src={src}
        title={title}
        style={{ maxWidth: Math.min(420, maxWidth), margin: '8px 0' }}
      />
    ),
  };

  const date = parseISO(data.createdAt);

  return (
    <Container>
      <Header />

      <Post>
        <h1>{data.title}</h1>
        <span>
          {format(date, "dd 'de' MMMM' às ' HH:mm", {
            locale: pt,
          })}
        </span>
        <ReactMarkdown
          source={data.content}
          escapeHtml={false}
          renderers={renderers}
        />
      </Post>

      <Footer />
    </Container>
  );
};

export default Blogpost;
