import { StyledComponent, DefaultTheme } from 'styled-components';
import * as Styled from './icon-button.styled';
import type { InternalIconButtonProps } from './icon-button.utils';

export type IconButtonProps = StyledComponent<
  'button',
  DefaultTheme,
  InternalIconButtonProps
>;

export const IconButton = Styled.RootButton;

export default IconButton;
