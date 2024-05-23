import { fetchProductsByFilters } from '../lib/data';
import { LayoutWrapper } from '@e-shop/ui';
import { Product, Paths } from '@e-shop/types';
import ProductsGrid from '../components/products-grid.component';

type ProductsFilters = Partial<Record<Paths<Product>, string>>;

type ProductsPageProps = {
  searchParams: ProductsFilters;
};

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const filters = Object.fromEntries(
    Object.entries(searchParams).filter(([, value]) => value?.trim())
  ) as ProductsFilters;

  const products = await fetchProductsByFilters(filters);

  return (
    <main>
      <LayoutWrapper>
        <ProductsGrid products={products} />
      </LayoutWrapper>
    </main>
  );
}
