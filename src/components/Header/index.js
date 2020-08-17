import React from 'react';
import { Link } from 'react-router-dom';

import { StyledHeader, StyledLi } from './styles';

export default function Header() {
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

  return (
    <StyledHeader>
      <ul>
        {headerLinks.map((link) => (
          <StyledLi key={link.name}>
            <Link to={link.href}>{link.name}</Link>
          </StyledLi>
        ))}
      </ul>
    </StyledHeader>
  );
}
