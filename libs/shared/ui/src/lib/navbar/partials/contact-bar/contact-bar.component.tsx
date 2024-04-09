import * as Styled from './contact-bar.styled';
import * as SharedStyled from '../../navbar.styled';
import { FacebookIcon, TwitterIcon, InstagramIcon } from '../../../icons';
import { EN } from '@e-shop/i18n';
import { VisuallyHidden } from '@reach/visually-hidden';

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
              pr={0}
            >
              <InstagramIcon aria-hidden />
              <VisuallyHidden>Instagram</VisuallyHidden>
            </Styled.ContactSocialLink>
          </Styled.ContactItem>
        </Styled.ContactList>
      </SharedStyled.BarContainer>
    </Styled.ContactBar>
  );
}

export default ContactBar;
