import { EN } from '@e-shop/i18n';
import { replaceByCurrentYear } from '@e-shop/utils';
import { PhoneSolidIcon, EmailSolidIcon, PinSolidIcon } from '@e-shop/icons';
import { Footer } from './footer.component';

export function FooterStory() {
  return (
    <Footer>
      <Footer.Nav>
        <Footer.NavSection>
          <a href="/#">
            <Footer.Brand />
          </a>

          <Footer.NavSectionList>
            <Footer.NavSectionListItem>
              <a href="/#">
                <Footer.NavSectionListItemIcon as={PhoneSolidIcon} />
                {EN.GLOBAL.CONTACT.PHONE}
              </a>
            </Footer.NavSectionListItem>
            <Footer.NavSectionListItem>
              <a href="/#">
                <Footer.NavSectionListItemIcon as={EmailSolidIcon} />
                {EN.GLOBAL.CONTACT.EMAIL}
              </a>
            </Footer.NavSectionListItem>
            <Footer.NavSectionListItem>
              <a href="/#">
                <Footer.NavSectionListItemIcon as={PinSolidIcon} />
                {EN.GLOBAL.LOCATION.STREET}, {EN.GLOBAL.LOCATION.SUITE},{' '}
                {EN.GLOBAL.LOCATION.CITY} {EN.GLOBAL.LOCATION.COUNTRY}
              </a>
            </Footer.NavSectionListItem>
          </Footer.NavSectionList>
        </Footer.NavSection>

        {/* Links */}
        <Footer.NavSection>
          <Footer.NavSectionTitle>
            {EN.FOOTER.NAVIGATION.LINKS_LIST.TITLE}
          </Footer.NavSectionTitle>
          <Footer.NavSectionList>
            <Footer.NavSectionListItem>
              <a href="/#">
                {EN.FOOTER.NAVIGATION.LINKS_LIST.ITEM.PRODUCT_LIST}
              </a>
            </Footer.NavSectionListItem>
            <Footer.NavSectionListItem>
              <a href="/#">
                {EN.FOOTER.NAVIGATION.LINKS_LIST.ITEM.ORDER_TRACKING}
              </a>
            </Footer.NavSectionListItem>
            <Footer.NavSectionListItem>
              <a href="/#">
                {EN.FOOTER.NAVIGATION.LINKS_LIST.ITEM.PRODUCT_GUIDE}
              </a>
            </Footer.NavSectionListItem>
            <Footer.NavSectionListItem>
              <a href="/#">{EN.FOOTER.NAVIGATION.LINKS_LIST.ITEM.CART}</a>
            </Footer.NavSectionListItem>
            <Footer.NavSectionListItem>
              <a href="/#">{EN.FOOTER.NAVIGATION.LINKS_LIST.ITEM.BLOG}</a>
            </Footer.NavSectionListItem>
          </Footer.NavSectionList>
        </Footer.NavSection>

        {/* Supports */}
        <Footer.NavSection>
          <Footer.NavSectionTitle>
            {EN.FOOTER.NAVIGATION.SUPPORTS_LIST.TITLE}
          </Footer.NavSectionTitle>
          <Footer.NavSectionList>
            <Footer.NavSectionListItem>
              <a href="/#">{EN.FOOTER.NAVIGATION.SUPPORTS_LIST.ITEM.ABOUT}</a>
            </Footer.NavSectionListItem>
            <Footer.NavSectionListItem>
              <a href="/#">{EN.FOOTER.NAVIGATION.SUPPORTS_LIST.ITEM.PRIVACY}</a>
            </Footer.NavSectionListItem>
            <Footer.NavSectionListItem>
              <a href="/#">{EN.FOOTER.NAVIGATION.SUPPORTS_LIST.ITEM.RETURN}</a>
            </Footer.NavSectionListItem>
            <Footer.NavSectionListItem>
              <a href="/#">
                {EN.FOOTER.NAVIGATION.SUPPORTS_LIST.ITEM.HELP_CENTRE}
              </a>
            </Footer.NavSectionListItem>
            <Footer.NavSectionListItem>
              <a href="/#">
                {EN.FOOTER.NAVIGATION.SUPPORTS_LIST.ITEM.STORE_LOCATIONS}
              </a>
            </Footer.NavSectionListItem>
            <Footer.NavSectionListItem>
              <a href="/#">{EN.FOOTER.NAVIGATION.SUPPORTS_LIST.ITEM.CAREERS}</a>
            </Footer.NavSectionListItem>
          </Footer.NavSectionList>
        </Footer.NavSection>
        {/* Categories */}
        <Footer.NavSection>
          <Footer.NavSectionTitle>
            {EN.FOOTER.NAVIGATION.CATEGORIES_LIST.TITLE}
          </Footer.NavSectionTitle>
          <Footer.NavSectionList>
            <Footer.NavSectionListItem>
              <a href="/#">
                {EN.FOOTER.NAVIGATION.CATEGORIES_LIST.ITEM.COMPUTERS_TABLETS}
              </a>
            </Footer.NavSectionListItem>
            <Footer.NavSectionListItem>
              <a href="/#">
                {
                  EN.FOOTER.NAVIGATION.CATEGORIES_LIST.ITEM
                    .MOBILE_PHONES_ACCESSORIES
                }
              </a>
            </Footer.NavSectionListItem>
            <Footer.NavSectionListItem>
              <a href="/#">
                {EN.FOOTER.NAVIGATION.CATEGORIES_LIST.ITEM.TV_HOME_THEATER}
              </a>
            </Footer.NavSectionListItem>
            <Footer.NavSectionListItem>
              <a href="/#">
                {EN.FOOTER.NAVIGATION.CATEGORIES_LIST.ITEM.AUDIO_HEADPHONES}
              </a>
            </Footer.NavSectionListItem>
            <Footer.NavSectionListItem>
              <a href="/#">
                {EN.FOOTER.NAVIGATION.CATEGORIES_LIST.ITEM.CAMERAS_CAMCORDERS}
              </a>
            </Footer.NavSectionListItem>
            <Footer.NavSectionListItem>
              <a href="/#">
                {EN.FOOTER.NAVIGATION.CATEGORIES_LIST.ITEM.GAMING_EQUIPMENT}
              </a>
            </Footer.NavSectionListItem>
            <Footer.NavSectionListItem>
              <a href="/#">
                {EN.FOOTER.NAVIGATION.CATEGORIES_LIST.ITEM.HOME_APPLIANCES}
              </a>
            </Footer.NavSectionListItem>
          </Footer.NavSectionList>
        </Footer.NavSection>

        <Footer.NavSection>
          <Footer.NavSection>
            <Footer.NavSectionTitle>
              {EN.FOOTER.NAVIGATION.PAYMENTS_LIST.TITLE}
            </Footer.NavSectionTitle>

            <Footer.PaymentsList />
          </Footer.NavSection>

          <Footer.NavSection>
            <Footer.NavSectionTitle>
              {EN.FOOTER.NAVIGATION.FOLLOW_US_LIST.TITLE}
            </Footer.NavSectionTitle>

            <Footer.NavSectionList>
              <Footer.NavSectionListItem>
                <a href="/#">
                  {EN.FOOTER.NAVIGATION.FOLLOW_US_LIST.ITEM.TWITTER}
                </a>
              </Footer.NavSectionListItem>
              <Footer.NavSectionListItem>
                <a href="/#">
                  {EN.FOOTER.NAVIGATION.FOLLOW_US_LIST.ITEM.INSTAGRAM}
                </a>
              </Footer.NavSectionListItem>
              <Footer.NavSectionListItem>
                <a href="/#">
                  {EN.FOOTER.NAVIGATION.FOLLOW_US_LIST.ITEM.FACEBOOK}
                </a>
              </Footer.NavSectionListItem>
            </Footer.NavSectionList>
          </Footer.NavSection>
        </Footer.NavSection>
      </Footer.Nav>

      <Footer.CopyrightBar>
        <Footer.CopyrightBarFormula>
          {replaceByCurrentYear(EN.FOOTER.COPYRIGHT)}
        </Footer.CopyrightBarFormula>
        <Footer.CopyrightBarList>
          <Footer.CopyrightBarListItem>
            <a href="/#">{EN.FOOTER.REST_LIST.ITEM.PRIVACY}</a>
          </Footer.CopyrightBarListItem>
          <Footer.CopyrightBarListItem>
            <a href="/#">{EN.FOOTER.REST_LIST.ITEM.TERMS}</a>
          </Footer.CopyrightBarListItem>
          <Footer.CopyrightBarListItem>
            <a href="/#">{EN.FOOTER.REST_LIST.ITEM.SITEMAP}</a>
          </Footer.CopyrightBarListItem>
        </Footer.CopyrightBarList>
      </Footer.CopyrightBar>
    </Footer>
  );
}

export default FooterStory;
