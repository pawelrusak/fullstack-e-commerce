import styled from 'styled-components';

import { getComponentThemeToken as getToken, device } from '@e-shop/theme';

const {
  articleIcon: articleIconToken,
  articleTitle: articleTitleToken,
  articleDescription: articleDescriptionToken,
} = getToken('valuesSection');

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

  @media screen and (${device.lg}) {
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
  color: ${articleIconToken._base.color};
  background-color: ${articleIconToken._base.backgroundColor};

  @media screen and (${device.lg}) {
    margin-top: 0.2rem;
    grid-row: 1 / 3;
    grid-column: 1;
  }
`;

export const ListItemArticleTitle = styled.h3`
  font-size: ${articleTitleToken._base.fontSize};
  line-height: ${articleTitleToken._base.lineHeight};
  font-weight: ${articleTitleToken._base.fontWeight};
  font-family: ${articleTitleToken._base.fontFamily};
  color: ${articleTitleToken._base.color};
  background-color: ${articleTitleToken._base.backgroundColor};
  margin-bottom: 0.2rem;

  @media screen and (${device.lg}) {
    grid-row: 1;
    grid-column: 2;
  }
`;

export const ListItemArticleDescription = styled.p`
  text-align: center;
  font-size: ${articleDescriptionToken._base.fontSize};
  font-family: ${articleDescriptionToken._base.fontFamily};
  line-height: ${articleDescriptionToken._base.lineHeight};
  font-weight: ${articleDescriptionToken._base.fontWeight};
  color: ${articleDescriptionToken._base.color};
  background-color: ${articleDescriptionToken._base.backgroundColor};

  @media screen and (${device.lg}) {
    text-align: left;
    grid-row: 2;
    grid-column: 2;
  }
`;
