'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { Breadcrumb } from '@e-shop/ui';
import { EN } from '@e-shop/i18n';

const RootBreadcrumb = styled(Breadcrumb)`
  margin-top: clamp(2rem, 5vw + 0.4rem, 6.4rem);
  margin-bottom: clamp(1.6rem, 4vw + 0.4rem, 4.8rem);
`;

function CheckoutBreadcrumb() {
  return (
    <RootBreadcrumb>
      <Breadcrumb.Item as={Link} href="/">
        {EN.CHECKOUT.BREADCRUMB.HOME}
      </Breadcrumb.Item>
      <Breadcrumb.Item as={Link} href="/cart">
        {EN.CHECKOUT.BREADCRUMB.CART}
      </Breadcrumb.Item>
      <Breadcrumb.Item as={Link} href="#" isCurrent>
        {EN.CHECKOUT.BREADCRUMB.CURRENT}
      </Breadcrumb.Item>
    </RootBreadcrumb>
  );
}

export default CheckoutBreadcrumb;