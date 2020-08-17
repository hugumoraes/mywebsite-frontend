import styled from 'styled-components';

export const StyledHeader = styled.header`
  background: #0e0e0e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 3.2rem;

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
  }
`;

export const StyledLi = styled.li`
  padding: 8px 12px;
  margin: 8px 4px;

  a {
    font-size: 1.25rem;
    font-weight: 700;
    color: white;
    transition: 0.2s ease;

    &:active,
    &:hover {
      border-bottom: 4px solid rgb(0, 255, 255);
    }
  }
`;
