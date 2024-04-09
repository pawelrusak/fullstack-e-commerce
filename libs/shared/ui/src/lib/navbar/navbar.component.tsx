import * as Styled from './navbar.styled';
import ContactBar from './partials/contact-bar';
import ProductNavBar from './partials/product-nav-bar';
import UserBar from './partials/user-bar';

export function Navbar() {
  return (
    <Styled.Header>
      <ContactBar />
      <UserBar />
      <ProductNavBar />
    </Styled.Header>
  );
}

export default Navbar;
