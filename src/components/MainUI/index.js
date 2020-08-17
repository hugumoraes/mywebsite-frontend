import React from 'react';

import { FaGithubSquare } from 'react-icons/fa';
import { StyledDiv } from './styles';

export default function MainUI({ divName }) {
  const projects = [
    {
      id: 1,
      name: 'Projeto número um',
      img:
        'https://previews.123rf.com/images/attitude/attitude1411/attitude141100146/33801896-soft-green-background-with-white-sponge-texture.jpg',
      description:
        'Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.',
    },
  ];

  return (
    <StyledDiv>
      <div className="h1">
        <h1>{divName}</h1>
        <hr />
      </div>

      <div className="grid-container">
        {projects.map((data) => (
          <div className="item" key={data.id}>
            <img src={data.img} alt={data.name} />
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <div>
              <button type="button">
                <FaGithubSquare />
              </button>
              <button type="button">Demo</button>
              <button type="button">Blog</button>
            </div>
          </div>
        ))}
      </div>
    </StyledDiv>
  );
}
