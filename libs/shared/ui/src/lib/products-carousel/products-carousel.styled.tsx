import styled from 'styled-components';
import { IconButton, ICON_BUTTON_VARIANT } from '../icon-button';

export const ArrowButton = styled(IconButton).attrs({
  variant: ICON_BUTTON_VARIANT.OUTLINE_SECONDARY,
})`
  padding: 0.9rem 1.1rem;
  max-height: 4rem;
  max-width: 4rem;
  left: 0;
  right: 0;
  align-self: center;
`;
