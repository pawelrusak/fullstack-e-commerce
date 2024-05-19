import { EN } from '@e-shop/i18n';
import * as Styled from './payments-list.styled';
import { VisuallyHidden } from '@reach/visually-hidden';
import { VistaLogo, MastercardLogo, PaypalLogo, ApplePlayLogo } from './logos';

const PAYMENTS_LOGOS = [
  {
    name: EN.FOOTER.NAVIGATION.PAYMENTS_LIST.ITEM.VISA,
    logo: <VistaLogo />,
  },
  {
    name: EN.FOOTER.NAVIGATION.PAYMENTS_LIST.ITEM.MASTERCARD,
    logo: <MastercardLogo />,
  },
  {
    name: EN.FOOTER.NAVIGATION.PAYMENTS_LIST.ITEM.APPLE_PAY,
    logo: <ApplePlayLogo />,
  },
  {
    name: EN.FOOTER.NAVIGATION.PAYMENTS_LIST.ITEM.PAYPAL,
    logo: <PaypalLogo />,
  },
];

export function PaymentsList() {
  return (
    <Styled.List>
      {PAYMENTS_LOGOS.map(({ name, logo }) => (
        <Styled.ListItem key={name}>
          <VisuallyHidden>{name}</VisuallyHidden>
          {logo}
        </Styled.ListItem>
      ))}
    </Styled.List>
  );
}
