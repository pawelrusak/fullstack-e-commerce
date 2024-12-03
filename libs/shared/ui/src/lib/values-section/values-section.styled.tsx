import styled from 'styled-components';

// TODO: Create a new screen breakpoint or use an existing one
const XSM_BREAKPOINT = '550px';

export const RootSection = styled.section`
  margin-bottom: 8rem;
  background-color: transparent;
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
  color: ${({ theme }) => theme.color.onBackground};
  background-color: transparent;

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

export const ListItemArticleIconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.color.onBackground};
  background-color: transparent;

  @media screen and (min-width: ${({ theme }) => theme.screens.lg}) {
    margin-top: 0.2rem;
    grid-row: 1 / 3;
    grid-column: 1;
  }
`;

export const ListItemArticleTitle = styled.h3`
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  margin-bottom: 0.2rem;
  color: ${({ theme }) => theme.color.onBackground};
  background-color: transparent;

  @media screen and (min-width: ${({ theme }) => theme.screens.lg}) {
    grid-row: 1;
    grid-column: 2;
  }
`;

export const ListItemArticleDescription = styled.p`
  text-align: center;
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  line-height: 2.4rem;
  color: ${({ theme }) => theme.color.onBackground};
  background-color: transparent;

  @media screen and (min-width: ${({ theme }) => theme.screens.lg}) {
    text-align: left;
    grid-row: 2;
    grid-column: 2;
  }
`;
