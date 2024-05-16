'use client';

import { HeroSection as Hero, Button } from '@e-shop/ui';
import { EN } from '@e-shop/i18n';

export default function UpToDateHeroSection() {
  return (
    <Hero imageSrc="/assets/images/get-up-to-date-placeholder.png">
      <Hero.TextWrapper>
        <Hero.Title>{EN.UP_TO_DATE_HERO.TITLE}</Hero.Title>
        <Hero.Description>{EN.UP_TO_DATE_HERO.DESCRIPTION}</Hero.Description>
      </Hero.TextWrapper>
      <Button>{EN.UP_TO_DATE_HERO.CTA_BUTTON}</Button>
    </Hero>
  );
}
