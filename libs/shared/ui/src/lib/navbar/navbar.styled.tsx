'use client';

import styled from 'styled-components';

import { getComponentThemeToken as getToken, device } from '@e-shop/theme';

const { root: rootToken, subBarContainer: subBarContainerToken } =
  getToken('navbar');

export const RootHeader = styled.header`
  color: ${rootToken._base.color};
  margin-bottom: 3rem;
`;

export const SubBarContainer = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  max-width: ${subBarContainerToken._base.maxWidth};

  @media screen and (${device.sm}) {
    max-width: ${subBarContainerToken._base.smMaxWidth};
    padding: 0 2rem;
    margin: 0 auto;
  }
`;
