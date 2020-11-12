import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 250px;
  width: 100%;

  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

export default StyledContainer;
