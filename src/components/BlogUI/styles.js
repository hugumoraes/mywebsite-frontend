import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  &:not(:first-child) {
    margin-top: 4rem;
  }

  h1 {
    margin-top: 2rem;
  }

  .h1 {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 2rem;

    h1 {
      background: #dfdfdf;
      padding: 0 12px;
      margin: 0 auto;
      z-index: 20;
    }

    hr {
      z-index: 10;
      position: absolute;
      top: 14px;
      width: 100%;
      border-bottom: 2px solid black;
    }
  }

  .grid-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    @media (min-width: 720px) {
      display: grid;
      justify-items: center;
      grid-template-columns: 50% 50%;
      grid-column-gap: 0;
      grid-row-gap: 1.4rem;
    }

    @media (min-width: 1200px) {
      display: grid;
      grid-template-columns: 32% 32% 32%;
      grid-column-gap: 2%;
      grid-row-gap: 1.4rem;
    }
  }

  .item {
    display: flex;
    flex-direction: column;

    width: min(92%, max(33vw, 320px));
    min-height: 480px;

    background: white;
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    margin-bottom: 2rem;

    img {
      border-radius: 4px 4px 0 0;
      width: 100%;
      height: 220px;
      background: red;
    }

    h1 {
      padding: 2rem;
    }

    p {
      padding: 0 2rem;
      font-size: 1rem;
    }

    @media (min-width: 420px) {
    }
  }
`;

export const StyledNothing = styled.div``;
