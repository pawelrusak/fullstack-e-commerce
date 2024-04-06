'use client';

import styled from 'styled-components';

export const StyledUi = styled.div`
  color: pink;
  color: ${(props) => props.theme.color.text};
`;
