import * as Styled from './hero-section.styled';
import type { StyledContainerSectionProps } from './hero-section.styled';

export type HeroSectionProps = {
  children?: React.ReactNode;
} & StyledContainerSectionProps &
  React.ComponentPropsWithRef<'section'>;

export function HeroSection({
  imageSrc,
  children,
  ...props
}: HeroSectionProps) {
  return (
    <Styled.ContainerSection imageSrc={imageSrc} {...props}>
      <Styled.Content>{children}</Styled.Content>
    </Styled.ContainerSection>
  );
}

HeroSection.TextWrapper = Styled.TextWrapper;
HeroSection.Title = Styled.Title;
HeroSection.Description = Styled.Description;

export default HeroSection;
