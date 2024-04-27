'use client';

import { HeroSection as Hero, Button } from '@e-shop/ui';
import { EN } from '@e-shop/i18n';

export default function HeroSection() {
  return (
    <Hero imageSrc="/assets/images/hero-placeholder.png">
      <Hero.TextWrapper>
        <Hero.Title>{EN.HERO.TITLE}</Hero.Title>
        <Hero.Description>{EN.HERO.DESCRIPTION}</Hero.Description>
      </Hero.TextWrapper>
      <Button>{EN.HERO.CTA_BUTTON}</Button>
    </Hero>
  );
}
