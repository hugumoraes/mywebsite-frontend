import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  background: var(--secondary-black);
  width: 100%;
  height: calc(180px + 3.2rem);
`;

export const CenterDiv = styled.div`
  display: flex;
  justify-content: space-between;

  .image {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
    width: 480px;
    height: 360px;

    background: white;
  }

  .bio {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 360px;
    flex: 1;

    text-align: center;

    h1 {
      color: white;
    }
  }

  padding-top: 3.2rem;
  width: 1200px;
`;
