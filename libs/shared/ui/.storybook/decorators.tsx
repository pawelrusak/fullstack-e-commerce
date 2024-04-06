import { GlobalStyle } from '../src';
import { Decorator } from '@storybook/react';

export const GlobalStyleDecorator: Decorator = (Story) => {
  return (
    <>
      <GlobalStyle />
      <Story />
    </>
  );
};
