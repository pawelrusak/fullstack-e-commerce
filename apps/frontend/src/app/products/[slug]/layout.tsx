import { LayoutWrapper } from '@e-shop/ui';
import RelatedProductSection from '../../components/related-products-section.component';
import PageDivider from '../../components/page-divider.component';
import { fetchRelatedProductsAndSubCategorySlug } from '../../lib/data';

type ProductDetailsLayoutProps = {
  children: React.ReactNode;
  params: { slug: string };
};

export default async function ProductDetailsLayout({
  children,
  params,
}: ProductDetailsLayoutProps) {
  const { products, subCategorySlug } =
    await fetchRelatedProductsAndSubCategorySlug(params.slug);

  return (
    <main>
      {children}

      <LayoutWrapper>
        <PageDivider />

        <aside>
          <RelatedProductSection
            products={products}
            subCategorySlug={subCategorySlug}
          />
        </aside>
      </LayoutWrapper>
    </main>
  );
}
