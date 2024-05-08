import { Product } from '@e-shop/types';
import {
  LayoutWrapper,
  Heading,
  Divider,
  Gallery,
  Paragraph,
} from '@e-shop/ui';
import { getCurrencyFormat } from '@e-shop/utils';
import { fetchProductDetails } from '../../lib/data';
import ProductDetailsBreadcrumb from '../../components/product-details-breadcrumb.component';
import ProductSpecificationExcerpt from '../../components/product-specification-excerpt.component';
import ProductDetailsLayout from '../../components/product-details-layout.component';
import ProductDetailsValuesSection from '../../components/product-details-values-section.component';
import ProductDetailsControls from '../../components/product-details-controls.component';

type ProductDetailsPageProps = {
  params: Pick<Product, 'slug'>;
};

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const product = await fetchProductDetails(params.slug);

  return (
    <LayoutWrapper>
      <main>
        <ProductDetailsLayout
          breadcrumb={<ProductDetailsBreadcrumb product={product} />}
          heading={
            <Heading as="h2" level={2}>
              {product.name}
            </Heading>
          }
          price={
            <Heading as="strong" level={1} style={{ color: '#FF624C' }}>
              {getCurrencyFormat(product.price)}
            </Heading>
          }
          gallery={
            <Gallery
              images={
                [product.thumbnail, ...product.images].filter(
                  Boolean
                ) as string[]
              }
            />
          }
          specification={<ProductSpecificationExcerpt product={product} />}
          values={<ProductDetailsValuesSection />}
          form={
            <form>
              <ProductDetailsControls />
            </form>
          }
          details={<Paragraph>{product.description}</Paragraph>}
        />
        <Divider style={{ margin: '8rem 0 6.4rem' }} />
        <aside>
          <h3>Related products</h3>
        </aside>
      </main>
    </LayoutWrapper>
  );
}
