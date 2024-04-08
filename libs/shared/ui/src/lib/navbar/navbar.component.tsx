import * as Styled from './navbar.styled';
import { FacebookIcon, TwitterIcon, InstagramIcon } from '../icons';
import { EN } from '@e-shop/i18n';
import { VisuallyHidden } from '@reach/visually-hidden';
/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <Styled.Header>
      <Styled.ContactBar>
        <Styled.BarContainer>
          <Styled.ContactList>
            <Styled.ContactItem>
              <Styled.ContactElement pl={0}>
                <Styled.LocationIcon aria-hidden />
                {EN.GLOBAL.LOCATION.STREET}, {EN.GLOBAL.LOCATION.CITY}{' '}
                {EN.GLOBAL.LOCATION.COUNTRY}
              </Styled.ContactElement>
            </Styled.ContactItem>
            <Styled.ContactItem>
              <Styled.ContactLink href={`tel:${EN.GLOBAL.CONTACT.PHONE}`}>
                <Styled.PhoneIcon aria-hidden />
                {EN.GLOBAL.CONTACT.PHONE}
              </Styled.ContactLink>
            </Styled.ContactItem>
          </Styled.ContactList>

          <Styled.ContactList>
            <Styled.ContactItem>
              <Styled.ContactSocialLink
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener"
              >
                <FacebookIcon aria-hidden />
                <VisuallyHidden>Facebook</VisuallyHidden>
              </Styled.ContactSocialLink>
              <Styled.ContactSocialLink
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener"
              >
                <TwitterIcon aria-hidden />
                <VisuallyHidden>Twitter</VisuallyHidden>
              </Styled.ContactSocialLink>
              <Styled.ContactSocialLink
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener"
              >
                <InstagramIcon aria-hidden />
                <VisuallyHidden>Instagram</VisuallyHidden>
              </Styled.ContactSocialLink>
            </Styled.ContactItem>
          </Styled.ContactList>
        </Styled.BarContainer>
      </Styled.ContactBar>

      {/* User Bar  */}

      {/* <Styled.BarContainer>
        <Brand />
      </Styled.BarContainer> */}

      {/* Product Bar */}

      <Styled.ProductNavBar>
        <Styled.BarContainer>
          <Styled.ProductNavList>
            <Styled.ProductNavItem>
              <Styled.HamburgerButton as={'button'} pl={0}>
                <Styled.Hamburger>
                  <div aria-hidden />
                  <div aria-hidden />
                  <div aria-hidden />
                </Styled.Hamburger>
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
        </Styled.BarContainer>
      </Styled.ProductNavBar>
    </Styled.Header>
  );
}

export default Navbar;
