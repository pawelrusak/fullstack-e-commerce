import type { Meta, StoryObj } from '@storybook/react';
import { HeroSection } from './hero-section.component';
import { Button } from '../button';
import heroPlaceholder from './storybook-assets/hero-placeholder.png';
import { EN } from '@e-shop/i18n';

export default {
  component: HeroSection,
  title: 'HeroSection',
  render: (args) => (
    <HeroSection {...args}>
      <HeroSection.TextWrapper>
        <HeroSection.Title>{EN.HERO.TITLE}</HeroSection.Title>
        <HeroSection.Description>{EN.HERO.DESCRIPTION}</HeroSection.Description>
      </HeroSection.TextWrapper>
      <Button>{EN.HERO.CTA_BUTTON}</Button>
    </HeroSection>
  ),
} satisfies Meta<typeof HeroSection>;

type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  args: {
    imageSrc: heroPlaceholder,
  },
};
