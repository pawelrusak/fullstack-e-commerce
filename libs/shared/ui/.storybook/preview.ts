import { Preview } from '@storybook/react';

import { GlobalStyleDecorator } from './decorators';

const preview: Preview = {
  decorators: [GlobalStyleDecorator],
};

export default preview;
