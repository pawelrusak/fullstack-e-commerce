import { Preview } from '@storybook/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { AppThemeDecorator, GlobalStyleDecorator } from './decorators';

const preview: Preview = {
  decorators: [AppThemeDecorator, GlobalStyleDecorator],
};

export default preview;
