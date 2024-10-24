'use client';

import styled from 'styled-components';
import { margin } from 'styled-system';
import type { MarginProps } from 'styled-system';

export type StyledRootSectionProps = {
  imageSrc: string;
} & MarginProps;

export const RootSection = styled.section<StyledRootSectionProps>`
  background-color: ${({ theme }) => theme.color.border};
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
  ${margin}

  @media screen and (min-width: ${({ theme }) => theme.screens.lg}) {
    height: 60rem;
    padding: 13.9rem 10.8rem;
  }
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
  font-family: ${({ theme }) => theme.fontFamily.poppins};

  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.text};
  /* white-space: pre-wrap; */

  font-size: 3rem;
  line-height: 3.6rem;
  padding-bottom: 0.5rem;

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    font-size: 4.8rem;
    line-height: 5.8rem;
    padding-bottom: 0.8rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.lg}) {
    font-size: 5.6rem;
    line-height: 6.8rem;
    padding-bottom: 1.6rem;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.text};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  padding-bottom: 2rem;

  font-size: 1.6rem;
  line-height: 2.4rem;

  @media screen and (min-width: ${({ theme }) => theme.screens.lg}) {
    font-size: 2rem;
    line-height: 3rem;
    padding-bottom: 1rem;
  }
`;
