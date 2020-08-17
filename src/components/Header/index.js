import React, { useState } from 'react';

import { StyledHeader, StyledLi, StyledContainer } from './styles';

import { ReactComponent as PhoneSvg } from '../../assets/svg/phone.svg';
import { ReactComponent as PcSvg } from '../../assets/svg/pc.svg';

export default function Header({ main }) {
  const [headerLinks, setHeaderLinks] = useState([
    'home',
    'portfolio',
    'blog',
    'contact',
    'about me',
  ]);

  return (
    <StyledHeader main={main}>
      <ul>
        {headerLinks.map((link) => (
          <StyledLi key={link}>
            <a href="/">{link}</a>
          </StyledLi>
        ))}
      </ul>
      {main ? (
        <StyledContainer>
          <div className="left">
            <h1>What is Lorem Ipsum?</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="right">
            <PhoneSvg className="phone" />
            <PcSvg className="pc" />
          </div>
        </StyledContainer>
      ) : null}
    </StyledHeader>
  );
}
