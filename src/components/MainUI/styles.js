import styled from 'styled-components';

export const StyledDiv = styled.div`
  width: 100%;

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
    display: grid;
    grid-template-columns: 32% 32% 32%;
    grid-column-gap: 2%;
    grid-row-gap: 1.4rem;
  }

  .item {
    display: flex;
    flex-direction: column;
    height: 480px;
    background: white;
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.1);

    img {
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

    div {
      display: flex;
      flex-direction: row;
      justify-content: start;
      padding: 2rem;

      button {
        display: flex;
        flex-direction: row;
        align-items: end;
        padding: 6px 12px;
        margin-left: 4px;
        font-size: 1.2rem;
        background: #d3d3d3;
        border-radius: 4px;

        &:hover {
          background: #a9a9a9;
        }

        svg {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
`;

export const StyledNothing = styled.div``;
