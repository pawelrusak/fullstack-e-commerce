import styled from 'styled-components';
import * as polished from 'polished';

export const StripeInner = styled.div`
  background-image: linear-gradient(
    45deg,
    ${({ theme }) => polished.transparentize(0.8, theme.color.primary)} 25%,
    transparent 25%,
    transparent 50%,
    ${({ theme }) => polished.transparentize(0.8, theme.color.primary)} 50%,
    ${({ theme }) => polished.transparentize(0.8, theme.color.primary)} 75%,
    transparent 75%,
    transparent 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  height: 20rem;
  background-size: 42.43px 42.43px;
`;

export const Container = styled.div`
  background-color: ${({ theme }) =>
    polished.transparentize(0.8, theme.color.secondary)};
`;
