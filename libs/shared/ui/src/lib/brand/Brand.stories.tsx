import type { Meta, StoryObj } from '@storybook/react';
import { Brand } from './brand.component';
import {
  NeutralSurfaceDecorator,
  PrimarySurfaceDecorator,
  SecondarySurfaceDecorator,
} from '../../../.storybook/decorators';
import { ACCENT_THEME, BASE_THEME } from './brand.constants';

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
      options: [ACCENT_THEME.PRIMARY, ACCENT_THEME.SECONDARY],
    },
    baseTheme: {
      control: 'select',
      options: [BASE_THEME.DEFAULT, BASE_THEME.INVERT],
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
    baseTheme: BASE_THEME.INVERT,
    accentTheme: ACCENT_THEME.SECONDARY,
  },
  decorators: [PrimarySurfaceDecorator],
};

export const OnSecondary: Story = {
  args: {
    baseTheme: BASE_THEME.INVERT,
    accentTheme: ACCENT_THEME.PRIMARY,
  },
  decorators: [SecondarySurfaceDecorator],
};
