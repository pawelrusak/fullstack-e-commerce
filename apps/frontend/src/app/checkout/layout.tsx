'use client';

import { LayoutWrapper } from '@e-shop/ui';
import { usePathname } from 'next/navigation';
import CheckoutHeader from '../components/checkout-header.component';
import CheckoutBreadcrumb from '../components/checkout-breadcrumb.component';

type CheckoutStep = 'information' | 'shipping' | 'payment';

type CheckoutLayoutProps = {
  children: React.ReactNode;
};

export default function CheckoutLayout({ children }: CheckoutLayoutProps) {
  const pathname = usePathname();

  const subPage = pathname.split('/')[2] as CheckoutStep;

  return (
    <main>
      <LayoutWrapper>
        <CheckoutBreadcrumb />

        <CheckoutHeader checkoutStep={subPage} />
        {children}

        {/* TODO add Hero */}
      </LayoutWrapper>
    </main>
  );
}
