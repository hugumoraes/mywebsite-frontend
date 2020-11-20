import React from 'react';
import { Link } from 'react-router-dom';

import { Container, List, Center } from './styles';

const Header: React.FC = () => {
  const brand = {
    name: 'Home',
    href: '/',
  };

  const headerLinks = [
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

  return (
    <Container>
      <Center>
        <Link to={brand.href} className="brand">
          {brand.name}
        </Link>
        <ul>
          {headerLinks.map((link) => (
            <List key={link.name}>
              <Link to={link.href}>{link.name}</Link>
            </List>
          ))}
        </ul>
      </Center>
    </Container>
  );
};

export default Header;
