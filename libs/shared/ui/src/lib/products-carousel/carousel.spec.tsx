// eslint-disable-next-line @nx/enforce-module-boundaries
import { render } from '@e-shop/test-utils';

import ProductCarousel from './products-carousel.component';

/**
 * {@link https://github.com/akiran/react-slick/issues/742#issuecomment-1934298590}
 */
jest.mock('react-slick', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="slick_mock">{children}</div>
  ),
}));

describe('Carousel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ProductCarousel>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </ProductCarousel>
    );
    expect(baseElement).toBeTruthy();
  });
});
