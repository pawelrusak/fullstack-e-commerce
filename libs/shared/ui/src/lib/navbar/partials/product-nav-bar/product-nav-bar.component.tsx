import { EN } from '@e-shop/i18n';
import * as Styled from './product-nav-bar.styled';
import * as SharedStyled from '../../navbar.styled';
import Hamburger from '../hamburger';

type ProductNavBarLink = {
  label: React.ReactNode;
  href: string;
};

type ProductNavBarLinks = Record<string, ProductNavBarLink[]>;

const productNavBarLinks: ProductNavBarLinks = {
  left: [
    {
      label: EN.NAV_BAR.MENU_BAR.PRODUCTS_DROPDOWN,
      href: '/',
    },
    {
      label: EN.NAV_BAR.MENU_BAR.BLOG,
      href: '/',
    },
    {
      label: EN.NAV_BAR.MENU_BAR.CONTACT,
      href: '/',
    },
  ],
  right: [
    {
      label: (
        <>
          {EN.NAV_BAR.MENU_BAR.LIMITED_SALE} <span aria-hidden>👋🏻</span>
        </>
      ),
      href: '/',
    },
    {
      label: EN.NAV_BAR.MENU_BAR.BEST_SELLER,
      href: '/',
    },
    {
      label: EN.NAV_BAR.MENU_BAR.NEW_ARRIVAL,
      href: '/',
    },
  ],
};

export function ProductNavBar() {
  return (
    <Styled.RootNav data-testid="navbar-product-nav-bar">
      <SharedStyled.BarContainer>
        <Styled.List>
          <Styled.ListItem>
            <Styled.ListItemHamburgerRoot
              as="button"
              pl={0}
              data-testid="products-hamburger"
            >
              <Hamburger />
              {EN.NAV_BAR.MENU_BAR.CATEGORIES_HAMBURGER}
            </Styled.ListItemHamburgerRoot>
          </Styled.ListItem>
          {productNavBarLinks.left.map((link, index) => (
            <Styled.ListItem key={index}>
              <Styled.ListItemLink href={link.href}>
                {link.label}
              </Styled.ListItemLink>
            </Styled.ListItem>
          ))}
        </Styled.List>

        <Styled.List>
          {productNavBarLinks.right.map((link, index, arr) => (
            <Styled.ListItem key={index}>
              <Styled.ListItemLink
                href={link.href}
                pr={index === arr.length - 1 ? 0 : undefined}
              >
                {link.label}
              </Styled.ListItemLink>
            </Styled.ListItem>
          ))}
        </Styled.List>
      </SharedStyled.BarContainer>
    </Styled.RootNav>
  );
}

export default ProductNavBar;
