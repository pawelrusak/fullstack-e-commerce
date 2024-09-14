'use client';

import styled from 'styled-components';
import * as helper from 'polished';

// TODO: add margin from styled-system
export const Divider = styled.hr`
  border: none;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: ${({ theme }) =>
    helper.transparentize(0.75, theme.color.text)};
  margin: 1.6rem 0;
`;
