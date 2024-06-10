import type { Meta, StoryObj } from '@storybook/react';
import { Cart, CartTableBodyRowProps } from './cart.component';
import { getCurrencyFormat } from '@e-shop/utils';
import { CartItem } from '@e-shop/store';
import { Modify, Product, SubCategory } from '@e-shop/types';
import imagePlaceholder from './storybook-assets/image-placeholder.png';

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
    id: '1',
    currentPrice: 100,
    cartItemsTotalPrice: 100,
    quantity: 1,
    variant: 'Space Gray',
    product: {
      name: '2019 Smart Laptop 256 GB 13 inch Pro Chip Core 1 TB HD SSD',
      subCategory: {
        name: 'Laptop',
      },
      thumbnail: imagePlaceholder,
    },
  },
];

export default {
  component: Cart,
  title: 'Cart',
  render: () => (
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
                quantity={quantity}
                totalPrice={getCurrencyFormat(cartItemsTotalPrice)}
                thumbnail={product.thumbnail}
                variant={variant}
                actionButtons={
                  <>
                    <Cart.RemoveFromCartButton
                      onClick={() => window.alert('remove')}
                    />
                    <Cart.ShareButton onClick={() => window.alert('share')} />
                  </>
                }
              />
            ),
          )}
        </Cart.TableBody>
      </Cart.Table>
      <Cart.SummarySection>
        <Cart.CouponSection>
          Enter coupon code (ex: FIRSTPAY)
          <Cart.CouponActionButton>Apply Code</Cart.CouponActionButton>
        </Cart.CouponSection>
        <Cart.SubtotalSection>
          <Cart.SubtotalLabel>Sub Total</Cart.SubtotalLabel>
          <Cart.SubtotalPrice>{getCurrencyFormat(7_733.0)}</Cart.SubtotalPrice>
          <Cart.SubtotalAdditionalInfo>
            ( excl. shipping fee )
          </Cart.SubtotalAdditionalInfo>
        </Cart.SubtotalSection>
      </Cart.SummarySection>
    </Cart>
  ),
} satisfies Meta<typeof Cart>;

type Story = StoryObj<typeof Cart>;

export const Primary: Story = {
  args: {},
};
