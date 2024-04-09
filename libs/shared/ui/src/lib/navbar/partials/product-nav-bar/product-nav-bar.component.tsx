import { EN } from '@e-shop/i18n';
import * as Styled from './product-nav-bar.styled';
import * as SharedStyled from '../../navbar.styled';
import Hamburger from '../hamburger';

export function ProductNavBar() {
  return (
    <Styled.ProductNavBar data-testid="navbar-product-nav-bar">
      <SharedStyled.BarContainer>
        <Styled.ProductNavList>
          <Styled.ProductNavItem>
            <Styled.HamburgerButton as={'button'} pl={0}>
              <Hamburger />
              {EN.NAV_BAR.MENU_BAR.CATEGORIES_HAMBURGER}
            </Styled.HamburgerButton>
          </Styled.ProductNavItem>
          <Styled.ProductNavItem>
            <Styled.ProductNavLink href="/">
              {EN.NAV_BAR.MENU_BAR.PRODUCTS_DROPDOWN}
            </Styled.ProductNavLink>
          </Styled.ProductNavItem>
          <Styled.ProductNavItem>
            <Styled.ProductNavLink href="/">
              {EN.NAV_BAR.MENU_BAR.BLOG}
            </Styled.ProductNavLink>
          </Styled.ProductNavItem>
          <Styled.ProductNavItem>
            <Styled.ProductNavLink href="/">
              {EN.NAV_BAR.MENU_BAR.CONTACT}
            </Styled.ProductNavLink>
          </Styled.ProductNavItem>
        </Styled.ProductNavList>

        <Styled.ProductNavList>
          <Styled.ProductNavItem>
            <Styled.ProductNavLink href="/">
              {EN.NAV_BAR.MENU_BAR.LIMITED_SALE} <span aria-hidden>👋🏻</span>
            </Styled.ProductNavLink>
          </Styled.ProductNavItem>
          <Styled.ProductNavItem>
            <Styled.ProductNavLink href="/">
              {EN.NAV_BAR.MENU_BAR.BEST_SELLER}
            </Styled.ProductNavLink>
          </Styled.ProductNavItem>
          <Styled.ProductNavItem>
            <Styled.ProductNavLink href="/" pr={0}>
              {EN.NAV_BAR.MENU_BAR.NEW_ARRIVAL}
            </Styled.ProductNavLink>
          </Styled.ProductNavItem>
        </Styled.ProductNavList>
      </SharedStyled.BarContainer>
    </Styled.ProductNavBar>
  );
}

export default ProductNavBar;
