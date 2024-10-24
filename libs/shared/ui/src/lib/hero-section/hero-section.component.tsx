import * as Styled from './hero-section.styled';
import type { StyledRootSectionProps } from './hero-section.styled';

export type HeroSectionProps = {
  children?: React.ReactNode;
} & StyledRootSectionProps &
  React.ComponentPropsWithoutRef<'section'>;

export function HeroSection({ children, ...props }: HeroSectionProps) {
  return (
    <Styled.RootSection {...props}>
      <Styled.Content>{children}</Styled.Content>
    </Styled.RootSection>
  );
}

HeroSection.TextWrapper = Styled.TextWrapper;
HeroSection.Title = Styled.Title;
HeroSection.Description = Styled.Description;

export default HeroSection;
