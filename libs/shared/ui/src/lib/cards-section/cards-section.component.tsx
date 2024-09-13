import * as Styled from './cards-section.styled';
import type { StyledSectionProps } from './cards-section.styled';

type CardsSectionProps = React.ComponentPropsWithRef<'section'> &
  StyledSectionProps;

export function CardsSection(props: CardsSectionProps) {
  return <Styled.RootSection {...props} />;
}

CardsSection.Body = Styled.Body;
CardsSection.Link = Styled.Link;
CardsSection.Title = Styled.Title;
CardsSection.Header = Styled.Header;

export default CardsSection;
