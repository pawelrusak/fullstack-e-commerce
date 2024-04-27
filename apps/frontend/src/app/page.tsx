import { LayoutWrapper } from '@e-shop/ui';
import HomepageHeroSection from './components/hero-section.component';

export default async function IndexPage() {
  return (
    <main>
      <LayoutWrapper>
        <HomepageHeroSection />
      </LayoutWrapper>
    </main>
  );
}
