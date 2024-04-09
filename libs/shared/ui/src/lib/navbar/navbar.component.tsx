import React from 'react';
import * as Styled from './navbar.styled';
import ContactBar from './partials/contact-bar';
import ProductNavBar from './partials/product-nav-bar';
import UserBar from './partials/user-bar';

type NavbarProps = {
  children?: React.ReactNode;
};

export function NavbarPure({ children }: NavbarProps) {
  return (
    <Styled.Header>
      {children ? (
        children
      ) : (
        <>
          <ContactBar />
          <UserBar />
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
