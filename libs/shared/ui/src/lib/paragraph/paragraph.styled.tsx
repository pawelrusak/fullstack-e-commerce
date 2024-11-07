'use client';

import styled from 'styled-components';

export const RootParagraph = styled.p`
  text-align: justify;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: 2rem;
  line-height: 3rem;
`;
