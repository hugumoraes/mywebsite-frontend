import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, List, StyledButton } from './styles';

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
      href: '/contact-me',
    },
  ];

  const handleMenu = (e) => {
    e.preventDefault();

    setShown(!shown);
  };

  return (
    <Container shown={shown}>
      <ul>
        {headerLinks.map((link) => (
          <List key={link.name}>
            <Link to={link.href}>{link.name}</Link>
          </List>
        ))}
      </ul>
      <StyledButton onClick={handleMenu}>{shown ? 'X' : 'Menu'}</StyledButton>
    </Container>
  );
}
