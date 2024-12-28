'use client';

import styled from 'styled-components';
import { margin } from 'styled-system';
import type { MarginProps } from 'styled-system';

import { getComponentThemeToken as getToken, device } from '@e-shop/theme';

const {
  root: rootToken,
  title: titleToken,
  description: descriptionToken,
} = getToken('heroSection');

export type StyledRootSectionProps = {
  imageSrc: string;
} & MarginProps;

export const RootSection = styled.section<StyledRootSectionProps>`
  background-color: ${rootToken._base.backgroundColor};
  background-image: url(${({ imageSrc }) => imageSrc});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  border-radius: 1.5rem;
  white-space: pre-wrap;
  max-width: 152rem;
  width: 100%;
  height: fit-content;
  padding: 6.4rem 2.4rem;
  margin-bottom: 8rem;

  @media screen and (${device.lg}) {
    height: 60rem;
    padding: 13.9rem 10.8rem;
  }

  ${margin}
`;

export const Content = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const TextWrapper = styled.div``;

export const Title = styled.h2`
  color: ${titleToken._base.color};
  font-family: ${titleToken._base.fontFamily};
  font-weight: ${titleToken._base.fontWeight};
  font-size: ${titleToken._base.fontSize};
  line-height: ${titleToken._base.lineHeight};
  padding-bottom: 0.5rem;

  @media screen and (${device.sm}) {
    font-size: ${titleToken._base.smFontSize};
    line-height: ${titleToken._base.smLineHeight};
    padding-bottom: 0.8rem;
  }

  @media screen and (${device.lg}) {
    font-size: ${titleToken._base.lgFontSize};
    line-height: ${titleToken._base.lgLineHeight};
    padding-bottom: 1.6rem;
  }
`;

export const Description = styled.p`
  color: ${descriptionToken._base.color};
  font-family: ${descriptionToken._base.fontFamily};
  font-weight: ${descriptionToken._base.fontWeight};
  font-size: ${descriptionToken._base.fontSize};
  line-height: ${descriptionToken._base.lineHeight};
  padding-bottom: 2rem;

  @media screen and (${device.lg}) {
    font-size: ${descriptionToken._base.lgFontSize};
    line-height: ${descriptionToken._base.lgLineHeight};
    padding-bottom: 1rem;
  }
`;
