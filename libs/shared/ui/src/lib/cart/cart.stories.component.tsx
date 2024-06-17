import { Cart, CartTableBodyRowProps } from './cart.component';
import { getCurrencyFormat } from '@e-shop/utils';
import { CartItem } from '@e-shop/store';
import { Modify, Product, SubCategory } from '@e-shop/types';
import { EN } from '@e-shop/i18n';
import cartStoryPlaceholder001 from './storybook-assets/001-cart-story-placeholder.png';
import cartStoryPlaceholder002 from './storybook-assets/002-cart-story-placeholder.png';
import cartStoryPlaceholder003 from './storybook-assets/003-cart-story-placeholder.png';
import cartStoryPlaceholder004 from './storybook-assets/004-cart-story-placeholder.png';
import cartStoryPlaceholder005 from './storybook-assets/005-cart-story-placeholder.png';

type StoryCartProduct = Modify<
  Pick<Product, 'thumbnail' | 'subCategory' | 'name'>,
  {
    subCategory: Pick<SubCategory, 'name'>;
  }
>;

type StoryCartItem = Omit<
  Modify<
    CartItem,
    {
      product: StoryCartProduct;
    }
  >,
  'productId'
> &
  Required<Pick<CartTableBodyRowProps, 'variant'>>;

const cartItems: StoryCartItem[] = [
  {
    id: '001',
    currentPrice: 1_659.0,
    cartItemsTotalPrice: 1_659.0,
    quantity: 1,
    variant: 'Space Gray',
    product: {
      name: '22019 Smart Laptop 256 GB 13 inch Pro Chip Core 1 TB HD SSD',
      subCategory: {
        name: 'Laptop',
      },
      thumbnail: cartStoryPlaceholder001,
    },
  },
  {
    id: '002',
    currentPrice: 999.0,
    cartItemsTotalPrice: 999.0,
    quantity: 1,
    variant: 'Fiery Red',
    product: {
      name: 'Mobile Watch A Series GPS 7/144 45 mm Red Rubber Band',
      subCategory: {
        name: 'Watch',
      },
      thumbnail: cartStoryPlaceholder002,
    },
  },
  {
    id: '003',
    currentPrice: 2_299.0,
    cartItemsTotalPrice: 2_299.0 * 2,
    quantity: 2,
    variant: 'Jet Black',
    product: {
      name: 'LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color USB HQ',
      subCategory: {
        name: 'Television',
      },
      thumbnail: cartStoryPlaceholder003,
    },
  },
  {
    id: '004',
    currentPrice: 109.0,
    cartItemsTotalPrice: 109.0 * 2,
    quantity: 2,
    variant: 'White',
    product: {
      name: 'Console Game Stick HD Wireless Bluetooth Connect',
      subCategory: {
        name: 'Gaming',
      },
      thumbnail: cartStoryPlaceholder004,
    },
  },
  {
    id: '005',
    currentPrice: 259.0,
    cartItemsTotalPrice: 259.0,
    quantity: 1,
    variant: 'Space Gray (with Case)',
    product: {
      name: 'Mini Tablet Pro 16 inch HD Pencil 128 GB System RAM 28',
      subCategory: {
        name: 'Tablet',
      },
      thumbnail: cartStoryPlaceholder005,
    },
  },
];

export function CartStoryComplete() {
  const handleChangeQuantity = (quantity: number) => {
    console.log(quantity);
  };

  return (
    <Cart>
      <Cart.Table>
        <Cart.TableHead />
        <Cart.TableBody>
          {cartItems.map(
            ({
              id,
              quantity,
              currentPrice,
              cartItemsTotalPrice,
              product,
              variant,
            }) => (
              <Cart.TableBodyRow
                key={id}
                category={product.subCategory.name}
                name={product.name}
                price={getCurrencyFormat(currentPrice)}
                quantity={
                  <Cart.QuantityControl
                    initialQuantity={quantity}
                    maxQuantity={5}
                    onChangeQuantity={handleChangeQuantity}
                  />
                }
                totalPrice={getCurrencyFormat(cartItemsTotalPrice)}
                thumbnail={product.thumbnail}
                variant={variant}
                actionButtons={
                  <>
                    <Cart.RemoveFromCartButton
                      productName={product.name}
                      onClick={() => window.alert('remove')}
                    />
                    <Cart.ShareButton
                      productName={product.name}
                      onClick={() => window.alert('share')}
                    />
                  </>
                }
              />
            ),
          )}
        </Cart.TableBody>
      </Cart.Table>
      <Cart.SummarySection>
        <Cart.CouponSection>
          {EN.CART_TABLE.SUMMARY.COUPON.LABEL}
          <Cart.CouponActionButton>
            {EN.CART_TABLE.SUMMARY.COUPON.ACTION_BUTTON}
          </Cart.CouponActionButton>
        </Cart.CouponSection>
        <Cart.SubtotalSection>
          <Cart.SubtotalLabel>
            {EN.CART_TABLE.SUMMARY.SUBTOTAL.LABEL}
          </Cart.SubtotalLabel>
          <Cart.SubtotalPrice>{getCurrencyFormat(7_733.0)}</Cart.SubtotalPrice>
          <Cart.SubtotalAdditionalInfo>
            ( {EN.CART_TABLE.SUMMARY.SUBTOTAL.ADDITIONAL_INFO} )
          </Cart.SubtotalAdditionalInfo>
        </Cart.SubtotalSection>
      </Cart.SummarySection>
    </Cart>
  );
}

export function CartStoryWithoutCoupon() {
  const handleChangeQuantity = (quantity: number) => {
    console.log(quantity);
  };

  return (
    <Cart>
      <Cart.Table>
        <Cart.TableHead />
        <Cart.TableBody>
          {cartItems.map(
            ({
              id,
              quantity,
              currentPrice,
              cartItemsTotalPrice,
              product,
              variant,
            }) => (
              <Cart.TableBodyRow
                key={id}
                category={product.subCategory.name}
                name={product.name}
                price={getCurrencyFormat(currentPrice)}
                quantity={
                  <Cart.QuantityControl
                    initialQuantity={quantity}
                    maxQuantity={5}
                    onChangeQuantity={handleChangeQuantity}
                  />
                }
                totalPrice={getCurrencyFormat(cartItemsTotalPrice)}
                thumbnail={product.thumbnail}
                variant={variant}
                actionButtons={
                  <>
                    <Cart.RemoveFromCartButton
                      productName={product.name}
                      onClick={() => window.alert('remove')}
                    />
                    <Cart.ShareButton
                      productName={product.name}
                      onClick={() => window.alert('share')}
                    />
                  </>
                }
              />
            ),
          )}
        </Cart.TableBody>
      </Cart.Table>
      <Cart.SummarySection>
        <Cart.SubtotalSection>
          <Cart.SubtotalLabel>
            {EN.CART_TABLE.SUMMARY.SUBTOTAL.LABEL}
          </Cart.SubtotalLabel>
          <Cart.SubtotalPrice>{getCurrencyFormat(7_733.0)}</Cart.SubtotalPrice>
          <Cart.SubtotalAdditionalInfo>
            ( {EN.CART_TABLE.SUMMARY.SUBTOTAL.ADDITIONAL_INFO} )
          </Cart.SubtotalAdditionalInfo>
        </Cart.SubtotalSection>
      </Cart.SummarySection>
    </Cart>
  );
}

export function CartStoryEmptyState() {
  return (
    <Cart>
      <Cart.Table>
        <Cart.TableHead />
        <Cart.TableBody removeThBorder>
          <Cart.TableBodyEmptyStateRow />
        </Cart.TableBody>
      </Cart.Table>
      <Cart.SummarySection>
        <Cart.SubtotalSection>
          <Cart.SubtotalLabel>
            {EN.CART_TABLE.SUMMARY.SUBTOTAL.LABEL}
          </Cart.SubtotalLabel>
          <Cart.SubtotalPrice>{getCurrencyFormat(0)}</Cart.SubtotalPrice>
          <Cart.SubtotalAdditionalInfo>
            ( {EN.CART_TABLE.SUMMARY.SUBTOTAL.ADDITIONAL_INFO} )
          </Cart.SubtotalAdditionalInfo>
        </Cart.SubtotalSection>
      </Cart.SummarySection>
    </Cart>
  );
}

export default CartStoryComplete;
