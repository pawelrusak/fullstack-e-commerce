import { StyledComponent, DefaultTheme } from 'styled-components';
import * as Styled from './button.styled';
import type { InternalButtonProps } from './button.utils';

export type ButtonProps = StyledComponent<
  'button',
  DefaultTheme,
  InternalButtonProps
>;

export const Button = Styled.RootButton;

export default Button;
