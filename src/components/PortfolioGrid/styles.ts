import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 24px;

  width: 100%;
  display: grid;
  grid-template-columns: 392px 392px 392px;
  grid-template-rows: 240px 240px 240px 240px 240px;
  grid-gap: 12px;

  .item {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;

    img {
      position: absolute;
      top: 0;
      left: 0;
      -webkit-transition: position 2s;
      transition: position 2s;
      width: 100%;
      height: 100%;
      transition: 0.4s;
      transition: margin 0.4s width 0.4s height 0.4s;
    }
  }

  .item1 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;

    transition: 0.4s;
  }

  .item1:hover {
    background: white;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);

    img {
      transition: 0.4s;
      transition: margin 0.4s width 0.4s height 0.4s;

      margin-top: 48px;
      margin-left: 48px;
      width: 50%;
      height: 50%;
    }
  }

  .item2 {
    background: transparent;
  }

  .item3 {
    background: blue;
    grid-row-start: 2;
    grid-row-end: 4;
  }

  .item4 {
    background: yellow;

    grid-column-start: 1;
    grid-column-end: 2;

    grid-row-start: 3;
    grid-row-end: 5;
  }

  .item5 {
    background: transparent;
  }

  .item6 {
    background: purple;
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 4;
    grid-row-end: 6;
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;

  padding: 48px;

  width: 100%;
  height: 100%;

  .links {
    width: 302px;
    display: flex;

    align-self: flex-end;

    justify-content: center;
    align-items: center;

    height: 64%;

    ul {
      display: flex;
      flex-direction: column;

      a {
        text-align: center;

        border-radius: 4px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

        color: var(--primary-white);
        background: var(--secondary-black);

        padding: 8px 24px;
        margin: 8px 0;
      }
    }
  }

  .bio {
    h1 {
      font-size: 32px;
      color: var(--primary-black);
    }
  }
`;
