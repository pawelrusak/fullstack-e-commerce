import { VisuallyHidden } from '@reach/visually-hidden';
import { EN } from '@e-shop/i18n';
import * as Styled from './Brand.styled';
import type { BrandSvgProps } from './Brand.styled';

type ClassNameAttribute = Pick<React.HTMLProps<HTMLElement>, 'className'>;

export type BrandProps = BrandSvgProps & ClassNameAttribute;

export function Brand({ className, ...rest }: BrandProps) {
  return (
    <Styled.Root className={className}>
      <Styled.BrandSvg {...rest} />
      <VisuallyHidden>{EN.GLOBAL.BRAND_NAME}</VisuallyHidden>
    </Styled.Root>
  );
}

export default Brand;
