import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { StyledHeader, StyledLi, StyledButton } from './styles';

export default function Header() {
  const [shown, setShown] = useState(false);

  const headerLinks = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Portfolio',
      href: '/portfolio',
    },
    {
      name: 'Blog',
      href: '/blog',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
  ];

  const handleMenu = (e) => {
    e.preventDefault();

    setShown(!shown);
  };

  return (
    <StyledHeader shown={shown}>
      <ul>
        {headerLinks.map((link) => (
          <StyledLi key={link.name}>
            <Link to={link.href}>{link.name}</Link>
          </StyledLi>
        ))}
      </ul>
      <StyledButton onClick={handleMenu}>{shown ? 'X' : 'Menu'}</StyledButton>
    </StyledHeader>
  );
}
