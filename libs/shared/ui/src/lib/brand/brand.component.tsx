import { VisuallyHidden } from '@reach/visually-hidden';
import { EN } from '@e-shop/i18n';
import * as Styled from './Brand.styled';

import type { StyledBrandSvgProps } from './Brand.styled';

// TODO: Move this to a shared type library or directory
type ClassNameAttribute = Pick<React.HTMLProps<HTMLElement>, 'className'>;

export type BrandProps = StyledBrandSvgProps &
  ClassNameAttribute & {
    screenReaderLabel?: string;
  };

export function Brand({
  className,
  screenReaderLabel = EN.GLOBAL.BRAND_NAME,
  ...rest
}: BrandProps) {
  return (
    <Styled.Root className={className}>
      <Styled.BrandSvg {...rest} />
      <VisuallyHidden>{screenReaderLabel}</VisuallyHidden>
    </Styled.Root>
  );
}

export default Brand;
