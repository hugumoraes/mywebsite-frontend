import React from 'react';

import { FaGithubSquare } from 'react-icons/fa';
import { StyledDiv } from './styles';

export default function ProjectsUI() {
  const projects = [
    {
      id: 1,
      name: 'Twitter UI Clone',
      img: 'https://i.imgur.com/jUzySjx.jpg',
      description:
        'Twitter interface clone using Typescript, React and Styled Components.',
      github: 'https://github.com/hugumoraes/ui-clone-twitter',
      demo: 'https://relaxed-goldwasser-41a778.netlify.app',
    },
  ];

  return (
    <StyledDiv>
      <div className="h1">
        <h1>Portfolio</h1>
        <hr />
      </div>

      <div className="grid-container">
        {projects.map((project) => (
          <div className="item" key={project.id}>
            <img src={project.img} alt={project.name} />
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <div>
              <a href={project.github}>
                <FaGithubSquare />
              </a>
              <a href={project.demo}>Demo</a>
              {project.blog ? <a href={project.blog}>Blog</a> : null}
            </div>
          </div>
        ))}
      </div>
    </StyledDiv>
  );
}
