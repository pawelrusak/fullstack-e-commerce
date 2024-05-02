import * as Styled from './specification.styled';

export type SpecificationProps = React.ComponentPropsWithRef<'dl'>;

export function Specification(props: SpecificationProps) {
  return <Styled.Container {...props} />;
}

Specification.Property = Styled.Property;
Specification.Details = Styled.Details;

export default Specification;
