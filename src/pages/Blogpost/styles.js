import styled from 'styled-components';

export const Container = styled.div``;

export const Post = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;

  background: white;

  width: 100%;

  margin-top: 2rem;
  padding: 12px 0;

  h1 {
    text-align: center;
    font-size: 1.5rem;
  }

  h2 {
    text-align: center;
    font-size: 1.25rem;
  }

  p {
    /* text-align: center; */
    margin: 8px 12px;
  }

  span {
    font-size: 1rem;
    color: var(--primary-grey);
  }
`;
