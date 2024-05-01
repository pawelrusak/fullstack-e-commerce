'use client';

import Link from 'next/link';
import { Product } from '@e-shop/types';
import { Breadcrumb } from '@e-shop/ui';
import { EN } from '@e-shop/i18n';

type ProductDetailsPageProps = {
  product: Pick<Product, 'slug' | 'name' | 'subCategory'>;
};

export default function ProductDetailsBreadcrumb({
  product,
}: ProductDetailsPageProps) {
  return (
    <Breadcrumb>
      <Breadcrumb.Item as={Link} href="/">
        {EN.BREADCRUMB.HOME}
      </Breadcrumb.Item>
      <Breadcrumb.Item as={Link} href={`/${product.subCategory.category._id}`}>
        {product.subCategory.category.name}
      </Breadcrumb.Item>
      <Breadcrumb.Item as={Link} href={`/${product.subCategory._id}`}>
        {product.subCategory.name}
      </Breadcrumb.Item>
      <Breadcrumb.Item as={Link} href={`/products/${product.slug}`} isCurrent>
        {product.name}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}
