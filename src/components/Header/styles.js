import styled from 'styled-components';

export const Container = styled.header.attrs((props) => ({
  shown: props.shown,
}))`
  background: #0e0e0e;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: ${(props) => (props.shown ? '4rem' : '0')};

  width: 100%;
  height: ${(props) => (props.shown ? '12rem' : '3.2rem')};

  li {
    display: ${(props) => (props.shown ? 'flex' : 'none')};
  }

  button {
    position: ${(props) => (props.shown ? 'absolute' : 'relative')};
    border-radius: ${(props) => (props.shown ? '50%' : '4px')};
    padding: 4px 8px;
    bottom: ${(props) => (props.shown ? '-36px' : '0')};
    font-size: 1.25rem;
  }

  @media (min-width: 420px) {
    height: 3.2rem;

    button {
      display: none;
    }

    ul {
      display: flex;
      flex-direction: row;
      list-style: none;

      li {
        display: inline-block;
      }
    }
  }
`;

export const List = styled.li`
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

export const StyledButton = styled.button`
  background: #0e0e0e;
  color: white;
`;
