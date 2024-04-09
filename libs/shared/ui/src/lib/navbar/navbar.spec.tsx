// eslint-disable-next-line @nx/enforce-module-boundaries
import { render, screen } from '@e-shop/test-utils';

import Navbar from './navbar.component';
import { EN } from '@e-shop/i18n';

describe('Navbar', () => {
  test('should render successfully', () => {
    render(<Navbar />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  test('should contains the correct links', () => {
    render(<Navbar />);

    const phoneLink = screen.getByRole('link', {
      name: EN.GLOBAL.CONTACT.PHONE,
    });
    const blogLink = screen.getByRole('link', { name: /blog/i });
    const loginLink = screen.getByRole('link', { name: /user/i });
    const brandLink = screen.getByRole('link', { name: /e-shop/i });
    const twitterLink = screen.getByRole('link', { name: /twitter/i });
    const contactLink = screen.getByRole('link', { name: /contact/i });
    const productLink = screen.getByRole('link', { name: /products/i });
    const facebookLink = screen.getByRole('link', { name: /facebook/i });
    const instagramLink = screen.getByRole('link', { name: /instagram/i });
    const bestSellerLink = screen.getByRole('link', { name: /best seller/i });
    const newArrivalLink = screen.getByRole('link', { name: /new arrival/i });
    const limitedSaleLink = screen.getByRole('link', { name: /limited sale/i });

    expect(blogLink).toBeInTheDocument();
    expect(brandLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
    expect(phoneLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    expect(productLink).toBeInTheDocument();
    expect(twitterLink).toBeInTheDocument();
    expect(facebookLink).toBeInTheDocument();
    expect(instagramLink).toBeInTheDocument();
    expect(bestSellerLink).toBeInTheDocument();
    expect(newArrivalLink).toBeInTheDocument();
    expect(limitedSaleLink).toBeInTheDocument();
  });

  test('should contains the hamburger button', () => {
    render(<Navbar />);
    const hamburgerButton = screen.getByRole('button', {
      name: /all categories/i,
    });
    expect(hamburgerButton).toBeInTheDocument();
  });

  test('should contains the cart button', () => {
    render(<Navbar />);

    const cartButton = screen.getByRole('button', { name: /cart/i });
    expect(cartButton).toBeInTheDocument();
  });

  test('should contains the brand name', () => {
    render(<Navbar />);

    const brandHeading = screen.getByRole('heading', { name: /e-shop/i });
    expect(brandHeading).toBeInTheDocument();
  });
});
