import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ProjectInfo } from './styles';

import portfolio1 from '../../assets/portfolio/portfolio1.jpg';
import portfolio2 from '../../assets/portfolio/portfolio2.jpg';
import portfolio3 from '../../assets/portfolio/portfolio3.jpg';
import portfolio4 from '../../assets/portfolio/portfolio4.jpg';

const PortfolioGrid: React.FC = () => {
  return (
    <Container>
      <div className="item item1">
        <ProjectInfo>
          <div className="links">
            <ul>
              <Link to="/">Github</Link>
              <Link to="/">Demo</Link>
              <Link to="/">Blog</Link>
            </ul>
          </div>
          <div className="bio">
            <h1>Project Bio</h1>
            <p>Project very long description</p>
          </div>
        </ProjectInfo>
        <img src={portfolio1} alt="Portfolio1" />
      </div>
      <div className="item item2" />
      <div className="item item3">
        <img src={portfolio2} alt="" />
      </div>
      <div className="item item4">
        <img src={portfolio4} alt="" />
      </div>
      <div className="item item5" />
      <div className="item item6">
        {' '}
        <img src={portfolio3} alt="" />
      </div>
    </Container>
  );
};

export default PortfolioGrid;
