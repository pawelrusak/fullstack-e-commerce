'use client';

import styled from 'styled-components';
import { Specification } from '@e-shop/ui';
import { EN } from '@e-shop/i18n';
import { Product } from '@e-shop/types';

type ProductSpecificationExcerptProps = {
  product: Pick<Product, 'brand' | 'size'>;
};

const ItalicSpecificationDetails = styled(Specification.Details)`
  font-style: italic;
`;

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
      <ItalicSpecificationDetails>
        {EN.SPECIFICATION.UNKNOWN_PROPERTY}
      </ItalicSpecificationDetails>

      <Specification.Property>
        {EN.SPECIFICATION.PROPERTY.DELIVERY}
      </Specification.Property>
      <ItalicSpecificationDetails>
        {EN.SPECIFICATION.UNKNOWN_PROPERTY}
      </ItalicSpecificationDetails>
    </Specification>
  );
}
