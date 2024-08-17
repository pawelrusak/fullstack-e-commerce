import { render, screen } from '@e-shop/test-utils';

import ProductCard from './product-card.component';

describe('ProductCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductCard />);
    expect(baseElement).toBeTruthy();
  });

  it('should contains the correct text in action buttons', () => {
    render(
      <ProductCard>
        <ProductCard.AddToCartButton />
        <ProductCard.AddToWishlistButton />
        <ProductCard.ShareButton />
      </ProductCard>,
    );

    const addToCartButton = screen.getByRole('button', {
      name: /add to cart/i,
    });
    const wishlistButton = screen.getByRole('button', {
      name: /add to wishlist/i,
    });
    const shareButton = screen.getByRole('button', { name: /share/i });

    expect(addToCartButton).toBeInTheDocument();
    expect(wishlistButton).toBeInTheDocument();
    expect(shareButton).toBeInTheDocument();
  });
});
