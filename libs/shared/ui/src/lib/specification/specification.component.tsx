import * as Styled from './specification.styled';

export type SpecificationProps = React.ComponentPropsWithRef<'dl'>;

export function Specification(props: SpecificationProps) {
  return <Styled.RootDescriptionList {...props} />;
}

Specification.Property = Styled.DescriptionProperty;
Specification.Details = Styled.DescriptionDetails;

export default Specification;
