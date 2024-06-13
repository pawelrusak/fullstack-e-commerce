import React from 'react';
import * as Styled from './navbar.styled';
import ContactBar from './partials/contact-bar';
import ProductNavBar from './partials/product-nav-bar';
import UserBar, { UserCartButtonProps } from './partials/user-bar';

type NavbarProps = {
  children?: React.ReactNode;
} & UserCartButtonProps;

export function NavbarPure({
  children,
  cartAmount,
  cartBadgeVariant,
  cartItemsCount,
}: NavbarProps) {
  return (
    <Styled.Header>
      {children ? (
        children
      ) : (
        <>
          <ContactBar />
          <UserBar
            cartAmount={cartAmount}
            cartBadgeVariant={cartBadgeVariant}
            cartItemsCount={cartItemsCount}
          />
          <ProductNavBar />
        </>
      )}
    </Styled.Header>
  );
}

export const Navbar = Object.assign(NavbarPure, {
  ContactBar,
  UserBar,
  ProductNavBar,
});

export default Navbar;
