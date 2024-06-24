'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { Heading, Cart, Button } from '@e-shop/ui';
import { withStore, useHydrationCartStore } from '@e-shop/store';
import { getCurrencyFormat } from '@e-shop/utils';
import { EN } from '@e-shop/i18n';
import * as polished from 'polished';

import type { CartItem } from '@e-shop/store';

const PageHeading = styled(Heading)`
  margin-bottom: clamp(1.4rem, 2.8vw + -0.28rem, 2.8rem);
`;

const CTAButtonsWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  flex-direction: column;
  margin-top: clamp(1.6rem, 2.667vw + 0.267rem, 3.2rem);
  margin-bottom: clamp(3.2rem, 11.333vw + -2.467rem, 10rem);

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    justify-content: flex-end;
    flex-direction: row;
  }
`;

const ShoppingButton = styled(Button)`
  color: ${({ theme }) => theme.color.text};
  text-align: center;
  background-color: transparent;
  border-color: transparent;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.text};
    background-color: ${polished.lighten(0.01, '#f4f4f4')};
    border-color: ${polished.lighten(0.01, '#f4f4f4')};
  }
`;

const CheckoutButton = styled(Button)`
  text-align: center;
`;

function CartSection() {
  const { cartStore, isHydrated } = useHydrationCartStore();

  const handleRemoveFromCart = (
    id: CartItem['id'],
    product: CartItem['product'],
  ) => {
    cartStore.findByIdAndRemove(id);

    window.alert(`Remove ${product.name} from cart`);
  };

  return (
    <>
      <PageHeading level={1} as="h2">
        Your Cart
      </PageHeading>

      <Cart>
        {isHydrated ? (
          <>
            <Cart.Table>
              <Cart.TableHead />
              <Cart.TableBody removeThBorder={!cartStore.itemsCount}>
                {cartStore.itemsCount ? (
                  cartStore.items.map(
                    ({
                      id,
                      quantity,
                      currentPrice,
                      cartItemsTotalPrice,
                      product,
                    }) => (
                      <Cart.TableBodyRow
                        key={id}
                        category={product.subCategory.name}
                        name={product.name}
                        price={getCurrencyFormat(currentPrice)}
                        quantity={quantity}
                        totalPrice={getCurrencyFormat(cartItemsTotalPrice)}
                        thumbnail={product.thumbnail}
                        actionButtons={
                          <>
                            <Cart.RemoveFromCartButton
                              onClick={() => handleRemoveFromCart(id, product)}
                            />
                          </>
                        }
                      />
                    ),
                  )
                ) : (
                  <Cart.TableBodyEmptyStateRow />
                )}
              </Cart.TableBody>
            </Cart.Table>
            <Cart.SummarySection>
              <Cart.SubtotalSection>
                <Cart.SubtotalLabel>
                  {EN.CART_TABLE.SUMMARY.SUBTOTAL.LABEL}
                </Cart.SubtotalLabel>
                <Cart.SubtotalPrice>
                  {getCurrencyFormat(cartStore.totalItemsPrice)}
                </Cart.SubtotalPrice>
                <Cart.SubtotalAdditionalInfo>
                  ( {EN.CART_TABLE.SUMMARY.SUBTOTAL.ADDITIONAL_INFO} )
                </Cart.SubtotalAdditionalInfo>
              </Cart.SubtotalSection>
            </Cart.SummarySection>
          </>
        ) : (
          'Loading'
        )}
      </Cart>
      <CTAButtonsWrapper>
        <ShoppingButton as={Link} href="/products">
          {EN.CART_PAGE.CTA_BUTTONS.CONTINUE_SHOPPING}
        </ShoppingButton>
        <CheckoutButton
          as={Link}
          tabIndex={isHydrated && !cartStore.itemsCount ? -1 : undefined}
          role="link"
          href="/checkout"
          aria-disabled={isHydrated && !cartStore.itemsCount}
        >
          {EN.CART_PAGE.CTA_BUTTONS.PROCEED_TO_CHECKOUT}
        </CheckoutButton>
      </CTAButtonsWrapper>
    </>
  );
}

export default withStore(CartSection);
