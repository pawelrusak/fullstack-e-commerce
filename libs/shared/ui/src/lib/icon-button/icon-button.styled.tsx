import styled from 'styled-components';
import {
  getVariantStyle,
  ICON_BUTTON_VARIANT,
  getSizeStyle,
  ICON_BUTTON_SIZE,
} from './icon-button.utils';

import type { InternalIconButtonProps } from './icon-button.utils';

export type StyledRootButtonProps = InternalIconButtonProps;

export const RootButton = styled.button<StyledRootButtonProps>`
  all: unset;
  box-sizing: border-box;
  display: grid;
  place-content: center;
  height: 6.4rem;
  width: 6.4rem;
  border-radius: 999px;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;

  &:focus {
    outline: auto;
  }

  ${({ variant = ICON_BUTTON_VARIANT.PRIMARY }) => getVariantStyle(variant)};

  ${({ size = ICON_BUTTON_SIZE.MEDIUM }) => getSizeStyle(size)};
`;
