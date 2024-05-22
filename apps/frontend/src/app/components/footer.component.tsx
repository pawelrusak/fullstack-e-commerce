'use client';

import Link from 'next/link';
import { EN } from '@e-shop/i18n';
import { Footer as BaseFooter } from '@e-shop/ui';
import { replaceByCurrentYear, getCategoryQueryString } from '@e-shop/utils';
import { PhoneSolidIcon, EmailSolidIcon, PinSolidIcon } from '@e-shop/icons';
import { Product } from '@e-shop/types';

type ProductCategorySlug = Product['subCategory']['category']['slug'];

function getProductByCategoryUrl(ProductCategorySlug: ProductCategorySlug) {
  return `/products?${getCategoryQueryString(ProductCategorySlug)}`;
}

type ListItem = {
  href: string;
  label: string;
};

const ListItems: Record<string, ListItem[]> = {
  linksList: [
    {
      href: '/',
      label: EN.FOOTER.NAVIGATION.LINKS_LIST.ITEM.PRODUCT_LIST,
    },
    {
      href: '/',
      label: EN.FOOTER.NAVIGATION.LINKS_LIST.ITEM.ORDER_TRACKING,
    },
    {
      href: '/',
      label: EN.FOOTER.NAVIGATION.LINKS_LIST.ITEM.PRODUCT_GUIDE,
    },
    {
      href: '/',
      label: EN.FOOTER.NAVIGATION.LINKS_LIST.ITEM.CART,
    },
    {
      href: '/',
      label: EN.FOOTER.NAVIGATION.LINKS_LIST.ITEM.BLOG,
    },
  ],
  supportsList: [
    {
      href: '/',
      label: EN.FOOTER.NAVIGATION.SUPPORTS_LIST.ITEM.ABOUT,
    },
    {
      href: '/',
      label: EN.FOOTER.NAVIGATION.SUPPORTS_LIST.ITEM.PRIVACY,
    },
    {
      href: '/',
      label: EN.FOOTER.NAVIGATION.SUPPORTS_LIST.ITEM.RETURN,
    },
    {
      href: '/',
      label: EN.FOOTER.NAVIGATION.SUPPORTS_LIST.ITEM.HELP_CENTRE,
    },
    {
      href: '/',
      label: EN.FOOTER.NAVIGATION.SUPPORTS_LIST.ITEM.STORE_LOCATIONS,
    },
    {
      href: '/',
      label: EN.FOOTER.NAVIGATION.SUPPORTS_LIST.ITEM.CAREERS,
    },
  ],
  // TODO fetch available categories from api
  categoriesList: [
    {
      href: getProductByCategoryUrl('computers-tablets'),
      label: EN.FOOTER.NAVIGATION.CATEGORIES_LIST.ITEM.COMPUTERS_TABLETS,
    },
    {
      href: getProductByCategoryUrl('mobile-accessories'),
      label:
        EN.FOOTER.NAVIGATION.CATEGORIES_LIST.ITEM.MOBILE_PHONES_ACCESSORIES,
    },
    {
      href: getProductByCategoryUrl('tv-home-theater'),
      label: EN.FOOTER.NAVIGATION.CATEGORIES_LIST.ITEM.TV_HOME_THEATER,
    },
    {
      href: getProductByCategoryUrl('audio-headphones'),
      label: EN.FOOTER.NAVIGATION.CATEGORIES_LIST.ITEM.AUDIO_HEADPHONES,
    },
    {
      href: getProductByCategoryUrl('cameras-camcorders'),
      label: EN.FOOTER.NAVIGATION.CATEGORIES_LIST.ITEM.CAMERAS_CAMCORDERS,
    },
    {
      href: getProductByCategoryUrl('gaming-equipment'),
      label: EN.FOOTER.NAVIGATION.CATEGORIES_LIST.ITEM.GAMING_EQUIPMENT,
    },
    {
      href: getProductByCategoryUrl('home-appliances'),
      label: EN.FOOTER.NAVIGATION.CATEGORIES_LIST.ITEM.HOME_APPLIANCES,
    },
  ],
  followUsList: [
    {
      href: 'https://www.twitter.com/',
      label: EN.FOOTER.NAVIGATION.FOLLOW_US_LIST.ITEM.TWITTER,
    },
    {
      href: 'https://www.instagram.com/',
      label: EN.FOOTER.NAVIGATION.FOLLOW_US_LIST.ITEM.INSTAGRAM,
    },
    {
      href: 'https://www.facebook.com/',
      label: EN.FOOTER.NAVIGATION.FOLLOW_US_LIST.ITEM.FACEBOOK,
    },
  ],
};

export function Footer() {
  return (
    <BaseFooter>
      <BaseFooter.Nav>
        <BaseFooter.NavSection>
          <Link href="/">
            <BaseFooter.Brand />
          </Link>

          <BaseFooter.NavSectionList>
            <BaseFooter.NavSectionListItem>
              <a href={`tel:${EN.GLOBAL.CONTACT.PHONE.replace(' ', '')}`}>
                <BaseFooter.NavSectionListItemIcon as={PhoneSolidIcon} />
                {EN.GLOBAL.CONTACT.PHONE}
              </a>
            </BaseFooter.NavSectionListItem>
            <BaseFooter.NavSectionListItem>
              <Link href="/#">
                <BaseFooter.NavSectionListItemIcon as={EmailSolidIcon} />
                {EN.GLOBAL.CONTACT.EMAIL}
              </Link>
            </BaseFooter.NavSectionListItem>
            <BaseFooter.NavSectionListItem>
              <Link href="/#">
                <BaseFooter.NavSectionListItemIcon as={PinSolidIcon} />
                {EN.GLOBAL.LOCATION.STREET}, {EN.GLOBAL.LOCATION.SUITE},{' '}
                {EN.GLOBAL.LOCATION.CITY} {EN.GLOBAL.LOCATION.COUNTRY}
              </Link>
            </BaseFooter.NavSectionListItem>
          </BaseFooter.NavSectionList>
        </BaseFooter.NavSection>

        {/* Links */}
        <BaseFooter.NavSection>
          <BaseFooter.NavSectionTitle>
            {EN.FOOTER.NAVIGATION.LINKS_LIST.TITLE}
          </BaseFooter.NavSectionTitle>
          <BaseFooter.NavSectionList>
            {ListItems.linksList.map(({ label, href }) => (
              <BaseFooter.NavSectionListItem key={href}>
                <Link href={href}>{label}</Link>
              </BaseFooter.NavSectionListItem>
            ))}
          </BaseFooter.NavSectionList>
        </BaseFooter.NavSection>

        {/* Supports */}
        <BaseFooter.NavSection>
          <BaseFooter.NavSectionTitle>
            {EN.FOOTER.NAVIGATION.SUPPORTS_LIST.TITLE}
          </BaseFooter.NavSectionTitle>
          <BaseFooter.NavSectionList>
            {ListItems.supportsList.map(({ label, href }) => (
              <BaseFooter.NavSectionListItem key={href}>
                <Link href={href}>{label}</Link>
              </BaseFooter.NavSectionListItem>
            ))}
          </BaseFooter.NavSectionList>
        </BaseFooter.NavSection>

        {/* Categories */}
        <BaseFooter.NavSection>
          <BaseFooter.NavSectionTitle>
            {EN.FOOTER.NAVIGATION.CATEGORIES_LIST.TITLE}
          </BaseFooter.NavSectionTitle>
          <BaseFooter.NavSectionList>
            {ListItems.categoriesList.map(({ label, href }) => (
              <BaseFooter.NavSectionListItem key={href}>
                <Link href={href}>{label}</Link>
              </BaseFooter.NavSectionListItem>
            ))}
          </BaseFooter.NavSectionList>
        </BaseFooter.NavSection>

        <BaseFooter.NavSection>
          <BaseFooter.NavSection>
            <BaseFooter.NavSectionTitle>
              {EN.FOOTER.NAVIGATION.PAYMENTS_LIST.TITLE}
            </BaseFooter.NavSectionTitle>
            <BaseFooter.PaymentsList />
          </BaseFooter.NavSection>

          <BaseFooter.NavSection>
            <BaseFooter.NavSectionTitle>
              {EN.FOOTER.NAVIGATION.FOLLOW_US_LIST.TITLE}
            </BaseFooter.NavSectionTitle>

            <BaseFooter.NavSectionList>
              {ListItems.followUsList.map(({ label, href }) => (
                <BaseFooter.NavSectionListItem key={href}>
                  <Link href={href}>{label}</Link>
                </BaseFooter.NavSectionListItem>
              ))}
            </BaseFooter.NavSectionList>
          </BaseFooter.NavSection>
        </BaseFooter.NavSection>
      </BaseFooter.Nav>

      <BaseFooter.CopyrightBar>
        <BaseFooter.CopyrightBarFormula>
          {replaceByCurrentYear(EN.FOOTER.COPYRIGHT)}
        </BaseFooter.CopyrightBarFormula>
        <BaseFooter.CopyrightBarList>
          <BaseFooter.CopyrightBarListItem>
            <Link href="/#">{EN.FOOTER.REST_LIST.ITEM.PRIVACY}</Link>
          </BaseFooter.CopyrightBarListItem>
          <BaseFooter.CopyrightBarListItem>
            <Link href="/#">{EN.FOOTER.REST_LIST.ITEM.TERMS}</Link>
          </BaseFooter.CopyrightBarListItem>
          <BaseFooter.CopyrightBarListItem>
            <Link href="/#">{EN.FOOTER.REST_LIST.ITEM.SITEMAP}</Link>
          </BaseFooter.CopyrightBarListItem>
        </BaseFooter.CopyrightBarList>
      </BaseFooter.CopyrightBar>
    </BaseFooter>
  );
}

export default Footer;
