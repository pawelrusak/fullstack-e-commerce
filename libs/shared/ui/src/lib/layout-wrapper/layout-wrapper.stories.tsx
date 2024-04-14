import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import * as polished from 'polished';
import { LayoutWrapper } from './layout-wrapper.component';

const StripeInner = styled.div`
  background-image: linear-gradient(
    45deg,
    ${({ theme }) => polished.transparentize(0.75, theme.color.primary)} 25%,
    transparent 25%,
    transparent 50%,
    ${({ theme }) => polished.transparentize(0.75, theme.color.primary)} 50%,
    ${({ theme }) => polished.transparentize(0.75, theme.color.primary)} 75%,
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

const Container = styled.div`
  background-color: ${({ theme }) =>
    polished.transparentize(0.8, theme.color.secondary)};
`;

export default {
  component: LayoutWrapper,
  title: 'LayoutWrapper',
  render: (args) => (
    <Container>
      <LayoutWrapper {...args}>
        <StripeInner>
          <p>The stripes are only used to display the inner size of the item</p>
        </StripeInner>
      </LayoutWrapper>
    </Container>
  ),
} satisfies Meta<typeof LayoutWrapper>;

type Story = StoryObj<typeof LayoutWrapper>;

export const Default: Story = {
  args: {},
};
