import React from 'react';

import { Container, CenterDiv } from './styles';

const HeaderBio: React.FC = () => {
  return (
    <Container>
      <CenterDiv>
        <div className="image" />
        <div className="bio">
          <h1>This is my bio</h1>
          <p>
            This is the text <br />
            i'll put below my bio
          </p>
        </div>
      </CenterDiv>
    </Container>
  );
};

export default HeaderBio;
