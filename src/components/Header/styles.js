import styled from 'styled-components';

export const StyledHeader = styled.header.attrs((props) => ({
  main: props.main,
}))`
  background: #0e0e0e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => (props.main ? undefined : 'center')};
  height: ${(props) => (props.main ? '30rem' : '4rem')};

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
  }

  h1 {
    font-weight: 700;
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.35rem;
  }

  p {
    font-size: 1.1rem;
  }
`;

export const StyledLi = styled.li`
  padding: 8px 12px;
  margin: 8px 4px;

  a {
    font-size: 1.25rem;
    font-weight: 700;
    color: white;
    text-transform: capitalize;
    transition: 0.2s ease;

    &:active,
    &:hover {
      border-bottom: 4px solid rgb(0, 255, 255);
    }
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 4em;
  width: 1200px;

  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    width: 50%;
    bottom: 2em;
  }

  .right {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 50%;
    bottom: 2em;

    svg {
      position: relative;
      fill: white;
    }

    .pc {
      left: 4em;
      width: 340px;
      height: 340px;
    }

    .phone {
      position: absolute;
      left: 0;
      width: 180px;
      height: 180px;
    }
  }
`;
