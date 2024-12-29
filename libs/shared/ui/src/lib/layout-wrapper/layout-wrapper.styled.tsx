'use client';

import styled, { css } from 'styled-components';

import { getComponentThemeToken as getToken, device } from '@e-shop/theme';

const { root: rookToken } = getToken('layoutWrapper');

export const layoutWrapperCss = css`
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: ${rookToken._base.maxWidth};

  @media screen and (${device.sm}) {
    max-width: ${rookToken._base.smMaxWidth};
    padding-left: 2rem;
    padding-right: 2rem;
    margin: 0 auto;
  }
`;

export const LayoutWrapper = styled.div`
  ${layoutWrapperCss}
`;
