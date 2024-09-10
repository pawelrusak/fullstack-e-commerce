import { StyledComponent, DefaultTheme } from 'styled-components';
import * as Styled from './button.styled';
import { BUTTON_VARIANT, BUTTON_COLOR_VARIANT } from './button.utils';
import type {
  ButtonProps as _ButtonProps,
  ButtonColorVariant,
  ButtonVariant,
} from './button.utils';

export type ButtonProps = StyledComponent<'button', DefaultTheme, _ButtonProps>;

export const Button = Styled.Button;

export default Button;
export { BUTTON_VARIANT, BUTTON_COLOR_VARIANT };
export type { ButtonColorVariant, ButtonVariant };
