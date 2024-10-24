import * as Styled from './hero-section.styled';
import type { StyledRootSectionProps } from './hero-section.styled';

export type HeroSectionProps = {
  children?: React.ReactNode;
} & StyledRootSectionProps &
  React.ComponentPropsWithRef<'section'>;

export function HeroSection({
  imageSrc,
  children,
  ...props
}: HeroSectionProps) {
  return (
    <Styled.RootSection imageSrc={imageSrc} {...props}>
      <Styled.Content>{children}</Styled.Content>
    </Styled.RootSection>
  );
}

HeroSection.TextWrapper = Styled.TextWrapper;
HeroSection.Title = Styled.Title;
HeroSection.Description = Styled.Description;

export default HeroSection;
