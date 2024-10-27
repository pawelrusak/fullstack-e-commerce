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
    <Styled.ContactBar data-testid="navbar-contact-bar">
      <SharedStyled.BarContainer>
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
            {contactBarSocialsLinks.map((link, index, array) => (
              <Styled.ContactSocialLink
                href={link.href}
                target="_blank"
                rel="noopener"
                key={link.href}
                pr={array.length - 1 === index ? 0 : undefined}
              >
                {link.icon}
                <VisuallyHidden>{link.screenReaderLabel}</VisuallyHidden>
              </Styled.ContactSocialLink>
            ))}
          </Styled.ContactItem>
        </Styled.ContactList>
      </SharedStyled.BarContainer>
    </Styled.ContactBar>
  );
}

export default ContactBar;
