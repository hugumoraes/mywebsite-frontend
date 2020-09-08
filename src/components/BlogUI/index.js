import React from 'react';

import { StyledDiv } from './styles';

export default function ProjectsUI() {
  return (
    <StyledDiv>
      <div className="h1">
        <h1>Blog</h1>
        <hr />
      </div>

      {/* <div className="grid-container">
        {blogs.map((blog) => (
          <div className="item" key={blog.id}>
            <img src={blog.img} alt={blog.name} />
            <h1>{blog.name}</h1>
            <p>{blog.description}</p>
          </div>
        ))}
      </div> */}
      <h1>Em desenvolvimento</h1>
    </StyledDiv>
  );
}
