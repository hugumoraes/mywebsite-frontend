import React from 'react';

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

import { Container, CenterDiv, MediaRow } from './styles';

const HeaderBio: React.FC = () => {
  return (
    <Container>
      <CenterDiv>
        <h1>Hi, I'm Hugo.</h1>
        <p>
          I'm a full stack software <br />
          developer
        </p>
        <MediaRow>
          <a
            href="https://www.linkedin.com/in/hugumoraes/"
            className="socialMedia"
          >
            <FaLinkedinIn />
          </a>
          <a href="whttps://www.github.com/hugumoraes" className="socialMedia">
            <FaGithub />
          </a>
        </MediaRow>
      </CenterDiv>
    </Container>
  );
};

export default HeaderBio;
