import * as Styled from './contact-bar.styled';
import * as SharedStyled from '../../navbar.styled';
import { FacebookIcon, TwitterIcon, InstagramIcon } from '@e-shop/icons';
import { EN } from '@e-shop/i18n';
import { VisuallyHidden } from '@reach/visually-hidden';

type ContactBarLink = {
  href: string;
  icon: React.ReactNode;
  screenReaderLabel: React.ReactNode;
};

const contactBarSocialsLinks: ContactBarLink[] = [
  {
    href: 'https://www.facebook.com/',
    icon: <FacebookIcon aria-hidden />,
    screenReaderLabel: 'Facebook',
  },
  {
    href: 'https://www.twitter.com/',
    icon: <TwitterIcon aria-hidden />,
    screenReaderLabel: 'Twitter',
  },
  {
    href: 'https://www.instagram.com/',
    icon: <InstagramIcon aria-hidden />,
    screenReaderLabel: 'Instagram',
  },
];

export function ContactBar() {
  return (
    <Styled.Root data-testid="navbar-contact-bar">
      <SharedStyled.BarContainer>
        <Styled.List>
          <Styled.ListItem>
            <Styled.ListItemText pl={0}>
              <Styled.LocationIcon aria-hidden />
              {EN.GLOBAL.LOCATION.STREET}, {EN.GLOBAL.LOCATION.CITY}{' '}
              {EN.GLOBAL.LOCATION.COUNTRY}
            </Styled.ListItemText>
          </Styled.ListItem>
          <Styled.ListItem>
            <Styled.ListItemLink href={`tel:${EN.GLOBAL.CONTACT.PHONE}`}>
              <Styled.PhoneIcon aria-hidden />
              {EN.GLOBAL.CONTACT.PHONE}
            </Styled.ListItemLink>
          </Styled.ListItem>
        </Styled.List>

        <Styled.List>
          <Styled.ListItem>
            {contactBarSocialsLinks.map((link, index, array) => (
              <Styled.ListItemSocialLink
                href={link.href}
                target="_blank"
                rel="noopener"
                key={link.href}
                pr={array.length - 1 === index ? 0 : undefined}
              >
                {link.icon}
                <VisuallyHidden>{link.screenReaderLabel}</VisuallyHidden>
              </Styled.ListItemSocialLink>
            ))}
          </Styled.ListItem>
        </Styled.List>
      </SharedStyled.BarContainer>
    </Styled.Root>
  );
}

export default ContactBar;
