import { LayoutWrapper } from '@e-shop/ui';
import { fetchFeaturedProducts } from './lib/data';
import HomepageHeroSection from './components/hero-section.component';
import ValuesSection from './components/values-section.component';
import HomepageFeaturedProductsSection from './components/featured-products-section.component';

export default async function IndexPage() {
  const featuredProducts = await fetchFeaturedProducts();

  return (
    <main>
      <LayoutWrapper>
        <HomepageHeroSection />
        <ValuesSection />
        <HomepageFeaturedProductsSection products={featuredProducts} />
      </LayoutWrapper>
    </main>
  );
}
