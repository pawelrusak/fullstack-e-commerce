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
    <Styled.BrandHeader>
      <Brand />
    </Styled.BrandHeader>
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

export default Footer;
