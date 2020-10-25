import React from 'react';
import { Link } from 'react-router-dom';

import { StyledDiv } from './styles';

interface Blogpost {
  id: string;
  title: string;
  content: string;
  published: string;
  createdAt: string;
  cover: string;
}

interface Props {
  blogposts: Blogpost[];
}

const BlogUI: React.FC<Props> = ({ blogposts }) => {
  return (
    <StyledDiv>
      <div className="h1">
        <h1>Blog</h1>
        <hr />
      </div>

      <div className="grid-container">
        {blogposts.map((blogpost) => (
          <div className="item" key={blogpost.id}>
            <img src={`${blogpost.cover}`} alt="alt" />
            <h1>{blogpost.title.substring(0, 75)}</h1>
            <p>{blogpost.content.substring(0, 100)}</p>
            <Link to={`/${blogpost.id}`}>See post</Link>
          </div>
        ))}
      </div>
    </StyledDiv>
  );
};

export default BlogUI;
