import styled from 'styled-components';

export const Hamburger = styled.div`
  display: inline-block;

  height: 2rem;
  width: 2rem;
  margin-right: 1.6rem;

  div {
    height: 2px;
    width: 100%;
    background-color: ${({ theme }) => theme.color.background};
    margin: 0.3rem 0;
    border-radius: 999px;
  }

  div + div {
    margin-top: 0.4rem;
  }
`;
