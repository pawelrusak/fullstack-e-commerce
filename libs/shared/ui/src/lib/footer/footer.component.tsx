import { EN } from '@e-shop/i18n';
import { replaceByCurrentYear } from '@e-shop/utils';
import { PhoneSolidIcon, EmailSolidIcon, PinSolidIcon } from '@e-shop/icons';
import * as Styled from './footer.styled';
import { Brand } from '../brand';
import { PaymentsList } from './partials';

export type FooterProps = React.ComponentPropsWithRef<'footer'>;

export function Footer(props: FooterProps) {
  return <Styled.Footer {...props} />;
}

// TODO add props to the component
function FooterBrand() {
  return (
    <h2>
      <Brand />
    </h2>
  );
}

Footer.Nav = Styled.Nav;
Footer.NavSection = Styled.NavSection;
Footer.NavSectionList = Styled.NavSectionList;
Footer.NavSectionListItem = Styled.NavSectionListItem;
Footer.NavSectionListItemIcon = Styled.NavSectionListItemIcon;
Footer.NavSectionTitle = Styled.NavSectionTitle;
Footer.CopyrightBar = Styled.CopyrightBar;
Footer.CopyrightBarFormula = Styled.CopyrightBarFormula;
Footer.CopyrightBarList = Styled.CopyrightBarList;
Footer.CopyrightBarListItem = Styled.CopyrightBarListItem;
Footer.PaymentsList = PaymentsList;
Footer.Brand = FooterBrand;

export function _Footer() {
  return (
    <Styled.Footer>
      <Styled.Nav>
        <Styled.NavSection>
          <h2>
            <Brand />
          </h2>

          <Styled.NavSectionList>
            <Styled.NavSectionListItem>
              <a href="/#">
                <Styled.NavSectionListItemIcon as={PhoneSolidIcon} />
                {EN.GLOBAL.CONTACT.PHONE}
              </a>
            </Styled.NavSectionListItem>
            <Styled.NavSectionListItem>
              <a href="/#">
                <Styled.NavSectionListItemIcon as={EmailSolidIcon} />
                {EN.GLOBAL.CONTACT.EMAIL}
              </a>
            </Styled.NavSectionListItem>
            <Styled.NavSectionListItem>
              <a href="/#">
                <Styled.NavSectionListItemIcon as={PinSolidIcon} />
                {EN.GLOBAL.LOCATION.STREET} {EN.GLOBAL.LOCATION.SUITE}
                {EN.GLOBAL.LOCATION.CITY} {EN.GLOBAL.LOCATION.COUNTRY}
              </a>
            </Styled.NavSectionListItem>
          </Styled.NavSectionList>
        </Styled.NavSection>

        {/* Links */}
        <Styled.NavSection>
          <Styled.NavSectionTitle>
            {EN.FOOTER.NAVIGATION.LINKS_LIST.TITLE}
          </Styled.NavSectionTitle>
          <Styled.NavSectionList>
            <Styled.NavSectionListItem>
              <a href="/#">
                {EN.FOOTER.NAVIGATION.LINKS_LIST.ITEM.PRODUCT_LIST}
              </a>
            </Styled.NavSectionListItem>
            <Styled.NavSectionListItem>
              <a href="/#">
                {EN.FOOTER.NAVIGATION.LINKS_LIST.ITEM.ORDER_TRACKING}
              </a>
            </Styled.NavSectionListItem>
            <Styled.NavSectionListItem>
              <a href="/#">
                {EN.FOOTER.NAVIGATION.LINKS_LIST.ITEM.PRODUCT_GUIDE}
              </a>
            </Styled.NavSectionListItem>
            <Styled.NavSectionListItem>
              <a href="/#">{EN.FOOTER.NAVIGATION.LINKS_LIST.ITEM.CART}</a>
            </Styled.NavSectionListItem>
            <Styled.NavSectionListItem>
              <a href="/#">{EN.FOOTER.NAVIGATION.LINKS_LIST.ITEM.BLOG}</a>
            </Styled.NavSectionListItem>
          </Styled.NavSectionList>
        </Styled.NavSection>

        {/* Supports */}
        <Styled.NavSection>
          <Styled.NavSectionTitle>
            {EN.FOOTER.NAVIGATION.SUPPORTS_LIST.TITLE}
          </Styled.NavSectionTitle>
          <Styled.NavSectionList>
            <Styled.NavSectionListItem>
              <a href="/#">{EN.FOOTER.NAVIGATION.SUPPORTS_LIST.ITEM.ABOUT}</a>
            </Styled.NavSectionListItem>
            <Styled.NavSectionListItem>
              <a href="/#">{EN.FOOTER.NAVIGATION.SUPPORTS_LIST.ITEM.PRIVACY}</a>
            </Styled.NavSectionListItem>
            <Styled.NavSectionListItem>
              <a href="/#">{EN.FOOTER.NAVIGATION.SUPPORTS_LIST.ITEM.RETURN}</a>
            </Styled.NavSectionListItem>
            <Styled.NavSectionListItem>
              <a href="/#">
                {EN.FOOTER.NAVIGATION.SUPPORTS_LIST.ITEM.HELP_CENTRE}
              </a>
            </Styled.NavSectionListItem>
            <Styled.NavSectionListItem>
              <a href="/#">
                {EN.FOOTER.NAVIGATION.SUPPORTS_LIST.ITEM.STORE_LOCATIONS}
              </a>
            </Styled.NavSectionListItem>
            <Styled.NavSectionListItem>
              <a href="/#">{EN.FOOTER.NAVIGATION.SUPPORTS_LIST.ITEM.CAREERS}</a>
            </Styled.NavSectionListItem>
          </Styled.NavSectionList>
        </Styled.NavSection>
        {/* Categories */}
        <Styled.NavSection>
          <Styled.NavSectionTitle>
            {EN.FOOTER.NAVIGATION.CATEGORIES_LIST.TITLE}
          </Styled.NavSectionTitle>
          <Styled.NavSectionList>
            <Styled.NavSectionListItem>
              <a href="/#">
                {EN.FOOTER.NAVIGATION.CATEGORIES_LIST.ITEM.COMPUTERS_TABLETS}
              </a>
            </Styled.NavSectionListItem>
            <Styled.NavSectionListItem>
              <a href="/#">
                {
                  EN.FOOTER.NAVIGATION.CATEGORIES_LIST.ITEM
                    .MOBILE_PHONES_ACCESSORIES
                }
              </a>
            </Styled.NavSectionListItem>
            <Styled.NavSectionListItem>
              <a href="/#">
                {EN.FOOTER.NAVIGATION.CATEGORIES_LIST.ITEM.TV_HOME_THEATER}
              </a>
            </Styled.NavSectionListItem>
            <Styled.NavSectionListItem>
              <a href="/#">
                {EN.FOOTER.NAVIGATION.CATEGORIES_LIST.ITEM.AUDIO_HEADPHONES}
              </a>
            </Styled.NavSectionListItem>
            <Styled.NavSectionListItem>
              <a href="/#">
                {EN.FOOTER.NAVIGATION.CATEGORIES_LIST.ITEM.CAMERAS_CAMCORDERS}
              </a>
            </Styled.NavSectionListItem>
            <Styled.NavSectionListItem>
              <a href="/#">
                {EN.FOOTER.NAVIGATION.CATEGORIES_LIST.ITEM.GAMING_EQUIPMENT}
              </a>
            </Styled.NavSectionListItem>
            <Styled.NavSectionListItem>
              <a href="/#">
                {EN.FOOTER.NAVIGATION.CATEGORIES_LIST.ITEM.HOME_APPLIANCES}
              </a>
            </Styled.NavSectionListItem>
          </Styled.NavSectionList>
        </Styled.NavSection>

        <Styled.NavSection>
          <Styled.NavSection>
            <Styled.NavSectionTitle>
              {EN.FOOTER.NAVIGATION.PAYMENTS_LIST.TITLE}
            </Styled.NavSectionTitle>

            <PaymentsList />
          </Styled.NavSection>

          <Styled.NavSection>
            <Styled.NavSectionTitle>
              {EN.FOOTER.NAVIGATION.FOLLOW_US_LIST.TITLE}
            </Styled.NavSectionTitle>

            <Styled.NavSectionList>
              <Styled.NavSectionListItem>
                <a href="/#">
                  {EN.FOOTER.NAVIGATION.FOLLOW_US_LIST.ITEM.TWITTER}
                </a>
              </Styled.NavSectionListItem>
              <Styled.NavSectionListItem>
                <a href="/#">
                  {EN.FOOTER.NAVIGATION.FOLLOW_US_LIST.ITEM.INSTAGRAM}
                </a>
              </Styled.NavSectionListItem>
              <Styled.NavSectionListItem>
                <a href="/#">
                  {EN.FOOTER.NAVIGATION.FOLLOW_US_LIST.ITEM.FACEBOOK}
                </a>
              </Styled.NavSectionListItem>
            </Styled.NavSectionList>
          </Styled.NavSection>
        </Styled.NavSection>
      </Styled.Nav>

      <Styled.CopyrightBar>
        <Styled.CopyrightBarFormula>
          {replaceByCurrentYear(EN.FOOTER.COPYRIGHT)}
        </Styled.CopyrightBarFormula>
        <Styled.CopyrightBarList>
          <Styled.CopyrightBarListItem>
            <a href="/#">{EN.FOOTER.REST_LIST.ITEM.PRIVACY}</a>
          </Styled.CopyrightBarListItem>
          <Styled.CopyrightBarListItem>
            <a href="/#">{EN.FOOTER.REST_LIST.ITEM.TERMS}</a>
          </Styled.CopyrightBarListItem>
          <Styled.CopyrightBarListItem>
            <a href="/#">{EN.FOOTER.REST_LIST.ITEM.SITEMAP}</a>
          </Styled.CopyrightBarListItem>
        </Styled.CopyrightBarList>
      </Styled.CopyrightBar>
    </Styled.Footer>
  );
}

export default Footer;
