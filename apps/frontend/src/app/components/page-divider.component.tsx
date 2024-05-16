'use client';

import styled from 'styled-components';
import { Divider } from '@e-shop/ui';

const PageDivider = styled(Divider)`
  margin: 4rem 0 3.2rem;

  @media screen and (min-width: ${({ theme }) => theme.screens.xl}) {
    margin: 8rem 0 6.4rem;
  }
`;

export default PageDivider;
