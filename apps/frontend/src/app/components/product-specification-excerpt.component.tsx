'use client';

import { Specification } from '@e-shop/ui';
import { EN } from '@e-shop/i18n';
import { Product } from '@e-shop/types';

type ProductSpecificationExcerptProps = {
  product: Pick<Product, 'brand' | 'size'>;
};

export default function ProductSpecificationExcerpt({
  product,
}: ProductSpecificationExcerptProps) {
  return (
    <Specification>
      <Specification.Property>
        {EN.SPECIFICATION.PROPERTY.BRAND}
      </Specification.Property>
      <Specification.Details>{product.brand}</Specification.Details>

      <Specification.Property>
        {EN.SPECIFICATION.PROPERTY.SIZE}
      </Specification.Property>
      <Specification.Details>
        {product.size.width} x {product.size.depth} x {product.size.height}{' '}
        {EN.SPECIFICATION.SIZE.UNIT} ({EN.SPECIFICATION.SIZE.DIMENSIONS})
      </Specification.Details>

      <Specification.Property>
        {EN.SPECIFICATION.PROPERTY.WEIGHT}
      </Specification.Property>
      <Specification.Details style={{ fontStyle: 'italic' }}>
        {EN.SPECIFICATION.UNKNOWN_PROPERTY}
      </Specification.Details>

      <Specification.Property>
        {EN.SPECIFICATION.PROPERTY.DELIVERY}
      </Specification.Property>
      <Specification.Details style={{ fontStyle: 'italic' }}>
        {EN.SPECIFICATION.UNKNOWN_PROPERTY}
      </Specification.Details>
    </Specification>
  );
}
