import type { Meta, StoryObj } from '@storybook/react';
import { Brand } from './brand.component';
import {
  NeutralSurfaceDecorator,
  PrimarySurfaceDecorator,
  SecondarySurfaceDecorator,
} from '../../../.storybook/decorators';

import type { BrandProps } from './brand.component';

type AccentThemes = BrandProps['accentTheme'][];
type BaseThemes = BrandProps['baseTheme'][];

export default {
  component: Brand,
  title: 'Brand',
  argTypes: {
    dotColor: {
      control: 'color',
    },
    textColor: {
      control: 'color',
    },
    accentTheme: {
      control: 'select',
      options: ['primary', 'secondary'] as AccentThemes,
    },
    baseTheme: {
      control: 'select',
      options: ['default', 'invert'] as BaseThemes,
    },
  },
} satisfies Meta<typeof Brand>;

type Story = StoryObj<typeof Brand>;

export const Default: Story = {
  args: {},
  decorators: [NeutralSurfaceDecorator],
};

export const OnPrimary: Story = {
  args: {
    accentTheme: 'secondary',
    baseTheme: 'invert',
  },
  decorators: [PrimarySurfaceDecorator],
};

export const OnSecondary: Story = {
  args: {
    baseTheme: 'invert',
    accentTheme: 'primary',
  },
  decorators: [SecondarySurfaceDecorator],
};
