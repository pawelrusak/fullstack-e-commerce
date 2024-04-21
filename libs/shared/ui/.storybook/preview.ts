import { Preview } from '@storybook/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ThemeDecorator, GlobalStyleDecorator } from './decorators';

const preview: Preview = {
  decorators: [ThemeDecorator, GlobalStyleDecorator],
};

export default preview;
