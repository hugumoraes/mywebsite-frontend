import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  background: var(--secondary-black);
  width: 100%;
  height: calc(480px + 3.2rem);
`;

export const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 1200px;

  h1 {
    color: var(--primary-white);
    font-weight: bold;
    font-size: 48px;
  }

  p {
    font-size: 36px;
    color: var(--primary-white);
  }
`;

export const MediaRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 12px;

  .socialMedia {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 60px;

    svg {
      width: 18px;
      height: 18px;
      fill: white;
    }
  }

  .socialMedia:hover {
    background: rgba(0, 0, 0, 0.2);
  }

  .socialMedia:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .socialMedia:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;
