import React from 'react';
import PropTypes from 'prop-types';

import StyledContainer from './styles';

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
