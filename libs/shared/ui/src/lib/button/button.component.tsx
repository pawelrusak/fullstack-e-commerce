import { StyledComponent, DefaultTheme } from 'styled-components';
import * as Styled from './button.styled';
import { BUTTON_VARIANT, BUTTON_COLOR_VARIANT } from './button.styled';
import type {
  StyledButtonProps,
  ButtonColorVariant,
  ButtonVariant,
} from './button.styled';

export type ButtonProps = StyledComponent<
  'button',
  DefaultTheme,
  StyledButtonProps
>;

export const Button = Styled.Button;

export default Button;
export { BUTTON_VARIANT, BUTTON_COLOR_VARIANT };
export type { ButtonColorVariant, ButtonVariant };
