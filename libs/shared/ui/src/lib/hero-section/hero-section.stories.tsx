import type { Meta, StoryObj } from '@storybook/react';
import { HeroSection } from './hero-section.component';
import { Button } from '../button';
import heroPlaceholder from './storybook-assets/hero-placeholder.png';

export default {
  component: HeroSection,
  title: 'HeroSection',
  render: (args) => (
    <HeroSection {...args}>
      <HeroSection.TextWrapper>
        <HeroSection.Title>
          {'Your One-Stop \nElectronic Market'}
        </HeroSection.Title>
        <HeroSection.Description>
          {
            'Welcome to e-shop, a place where you can buy \neverything about electronics. Sale every day!'
          }
        </HeroSection.Description>
      </HeroSection.TextWrapper>
      <Button>Shop Now</Button>
    </HeroSection>
  ),
} satisfies Meta<typeof HeroSection>;

type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  args: {
    imageSrc: heroPlaceholder,
  },
};
