'use client';

import styled from 'styled-components';
import * as helper from 'polished';

// @todo add margin from styled-system
export const Divider = styled.hr`
  border: none;
  border-top: 1px solid
    ${({ theme }) => helper.transparentize(0.75, theme.color.text)};
  margin: 1.6rem 0;
`;
