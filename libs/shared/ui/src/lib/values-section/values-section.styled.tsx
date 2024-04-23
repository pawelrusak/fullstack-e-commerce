import styled from 'styled-components';

const XSM_BREAKPOINT = '550px';

export const ContainerSection = styled.section`
  margin-bottom: 8rem;
`;

export const List = styled.ul`
  list-style: none;

  @media screen and (min-width: ${XSM_BREAKPOINT}) {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
  }
`;

export const ListItem = styled.li`
  margin: 1.5rem;

  @media screen and (min-width: ${XSM_BREAKPOINT}) {
    margin-bottom: 0;
  }
`;

export const Article = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.screens.lg}) {
    display: grid;
    grid-template-columns: fit-content fit-content;
    grid-template-rows: auto auto;

    gap: 0 2.4rem;
  }
`;

export const ArticleIconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;

  @media screen and (min-width: ${({ theme }) => theme.screens.lg}) {
    margin-top: 0.2rem;
    grid-row: 1 / 3;
    grid-column: 1;
  }
`;

export const ArticleTitle = styled.h3`
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 0.2rem;

  @media screen and (min-width: ${({ theme }) => theme.screens.lg}) {
    grid-row: 1;
    grid-column: 2;
  }
`;

export const ArticleDescription = styled.p`
  text-align: center;
  font-size: 1.6rem;
  line-height: 2.4rem;

  @media screen and (min-width: ${({ theme }) => theme.screens.lg}) {
    text-align: left;
    grid-row: 2;
    grid-column: 2;
  }
`;
