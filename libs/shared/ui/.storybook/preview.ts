import { Preview } from '@storybook/react';

import { ThemeDecorator, GlobalStyleDecorator } from './decorators';

const preview: Preview = {
  decorators: [ThemeDecorator, GlobalStyleDecorator],
};

export default preview;
