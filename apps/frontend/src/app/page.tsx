import { LayoutWrapper } from '@e-shop/ui';
import HomepageHeroSection from './components/hero-section.component';
import ValuesSection from './components/values-section.component';

export default async function IndexPage() {
  return (
    <main>
      <LayoutWrapper>
        <HomepageHeroSection />
        <ValuesSection />
      </LayoutWrapper>
    </main>
  );
}
