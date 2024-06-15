'use client';

import { Navbar as BaseNavbar } from '@e-shop/ui';
import { useHydrationCartStore, withStore } from '@e-shop/store';

export function Navbar() {
  const { cartStore, isHydrated } = useHydrationCartStore();

  const cartAmount = isHydrated ? cartStore.totalItemsPrice : 0;
  const cartItemsCount = isHydrated ? cartStore.itemsCount : 0;

  return (
    <BaseNavbar
      cartAmount={cartAmount}
      cartItemsCount={cartItemsCount}
      cartBadgeVariant="number"
    />
  );
}

export default withStore(Navbar);
