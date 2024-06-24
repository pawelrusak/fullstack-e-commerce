import { LayoutWrapper } from '@e-shop/ui';
import CartPageBreadcrumb from '../components/cart-page-breadcrumb.component';
import CartSection from '../components/cart-section.component';
import CartPageValuesSection from '../components/cart-page-values-section.component';

export default function CartPage() {
  return (
    <main>
      <LayoutWrapper>
        <CartPageBreadcrumb />

        <CartSection />
      </LayoutWrapper>

      <CartPageValuesSection />
    </main>
  );
}
