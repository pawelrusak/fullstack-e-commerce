import React from 'react';
import { Product } from '@e-shop/types';
import { VisuallyHidden } from '@reach/visually-hidden';
import { ShareBigIcon, TrashBigIcon } from '@e-shop/icons';
import { EN } from '@e-shop/i18n';
import * as Styled from './cart.styled';
import { StyledTBodyProps } from './cart.styled';
import CartQuantity from './partials/cart-quantity-control';

export type CartProps = React.ComponentPropsWithRef<'section'>;

export function Cart(props: CartProps) {
  return <Styled.SectionContainer {...props} />;
}

export type CartTableProps = React.ComponentPropsWithRef<'table'>;

function CartTable(props: CartTableProps) {
  return (
    <Styled.Root>
      <Styled.Table {...props} />
    </Styled.Root>
  );
}

export type CartTableHeadProps = {
  productTableHead?: React.ReactNode;
  priceTableHead?: React.ReactNode;
  quantityTableHead?: React.ReactNode;
  totalTableHead?: React.ReactNode;
  actionTableHead?: React.ReactNode;
};

function CartTableHead({
  productTableHead = EN.CART_TABLE.HEADER.PRODUCT,
  priceTableHead = EN.CART_TABLE.HEADER.PRICE,
  quantityTableHead = EN.CART_TABLE.HEADER.QUANTITY,
  totalTableHead = EN.CART_TABLE.HEADER.TOTAL,
  actionTableHead = (
    <VisuallyHidden>{EN.CART_TABLE.HEADER.ACTION}</VisuallyHidden>
  ),
}: CartTableHeadProps) {
  return (
    <Styled.THead>
      <Styled.Tr>
        <Styled.ThProduct>{productTableHead}</Styled.ThProduct>
        <Styled.ThPrice>{priceTableHead}</Styled.ThPrice>
        <Styled.ThQuantity>{quantityTableHead}</Styled.ThQuantity>
        <Styled.ThTotal>{totalTableHead}</Styled.ThTotal>
        <Styled.ThAction>{actionTableHead}</Styled.ThAction>
      </Styled.Tr>
    </Styled.THead>
  );
}

export type CartTableBody = React.ComponentPropsWithRef<'tbody'> &
  StyledTBodyProps;

function CartTableBody(props: CartTableBody) {
  return <Styled.TBody {...props} />;
}

export type CartTableBodyRowProps = {
  variant?: string;
  variantLabel?: React.ReactNode;
  quantity: React.ReactNode;
  price: React.ReactNode;
  totalPrice: React.ReactNode;
  name: React.ReactNode;
  category: React.ReactNode;
  actionButtons?: React.ReactNode;
} & Pick<Product, 'thumbnail'>;

function CartTableBodyRow({
  thumbnail,
  quantity,
  category,
  name,
  variantLabel = `${EN.CART_TABLE.PRODUCT_ITEM.VARIANT_LABEL}:`,
  variant,
  price,
  totalPrice,
  actionButtons,
}: CartTableBodyRowProps) {
  return (
    <Styled.Tr>
      <Styled.TdProduct>
        <Styled.ProductInner>
          <Styled.ProductThumbnail
            width={237}
            height={214}
            src={thumbnail}
            alt=""
          />
          <Styled.ProductDetails>
            <Styled.ProductCategory>{category}</Styled.ProductCategory>
            <Styled.ProductName>{name}</Styled.ProductName>
            {variant && (
              <Styled.ProductVariant>
                <Styled.ProductVariantLabel>
                  {variantLabel}{' '}
                </Styled.ProductVariantLabel>
                {variant}
              </Styled.ProductVariant>
            )}
          </Styled.ProductDetails>
        </Styled.ProductInner>
      </Styled.TdProduct>
      <Styled.TdPrice>
        <Styled.Price>{price}</Styled.Price>
      </Styled.TdPrice>
      <Styled.TdQuantity>{quantity}</Styled.TdQuantity>
      <Styled.TdTotal>
        <Styled.PriceTotal>{totalPrice}</Styled.PriceTotal>
      </Styled.TdTotal>
      <Styled.TdAction>
        <Styled.ActionButtons>{actionButtons}</Styled.ActionButtons>
      </Styled.TdAction>
    </Styled.Tr>
  );
}

type HTagLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type CartTableBodyEmptyStateRowProps = {
  title?: string;
  description?: string;
  headingLevel?: HTagLevel;
};

function CartTableBodyEmptyStateRow({
  title = EN.CART_TABLE.EMPTY_CART.TITLE,
  description = EN.CART_TABLE.EMPTY_CART.DESCRIPTION,
  headingLevel = 2,
}: CartTableBodyEmptyStateRowProps) {
  return (
    <Styled.Tr>
      <Styled.TdEmptyState colSpan={5}>
        <Styled.EmptyStateHeader>
          <Styled.EmptyStateCartIcon aria-hidden />
          <Styled.EmptyStateTitle as={`h${headingLevel}`}>
            {title}
          </Styled.EmptyStateTitle>
          <Styled.EmptyStateParagraph>{description}</Styled.EmptyStateParagraph>
        </Styled.EmptyStateHeader>
      </Styled.TdEmptyState>
    </Styled.Tr>
  );
}

export type CartActionButtonProps = Omit<
  React.ComponentPropsWithRef<'button'>,
  'children'
> & {
  screenReaderText?: string;
  productName?: string;
  primary?: boolean;
};

function RemoveFromCartButton({
  primary = true,
  productName = EN.CART_TABLE.PRODUCT_ITEM.DEFAULT_PRODUCT_NAME,
  screenReaderText = EN.CART_TABLE.PRODUCT_ITEM.ACTION_BUTTON.REMOVE_FROM_CART.replace(
    ':productName:',
    productName,
  ),
  ...props
}: CartActionButtonProps) {
  return (
    <Styled.IconButton {...props} primary={primary}>
      <VisuallyHidden>{screenReaderText}</VisuallyHidden>
      <TrashBigIcon aria-hidden />
    </Styled.IconButton>
  );
}

function ShareButton({
  primary = false,
  productName = EN.CART_TABLE.PRODUCT_ITEM.DEFAULT_PRODUCT_NAME,
  screenReaderText = EN.CART_TABLE.PRODUCT_ITEM.ACTION_BUTTON.SHARE.replace(
    ':productName:',
    productName,
  ),
  ...props
}: CartActionButtonProps) {
  return (
    <Styled.IconButton {...props} primary={primary}>
      <VisuallyHidden>{screenReaderText}</VisuallyHidden>
      <ShareBigIcon aria-hidden />
    </Styled.IconButton>
  );
}

Cart.Table = CartTable;
Cart.TableHead = CartTableHead;
Cart.TableBody = CartTableBody;
Cart.TableBodyRow = CartTableBodyRow;
Cart.RemoveFromCartButton = RemoveFromCartButton;
Cart.ShareButton = ShareButton;
Cart.SummarySection = Styled.SummarySection;
Cart.CouponSection = Styled.CouponSection;
Cart.CouponActionButton = Styled.CouponActionButton;
Cart.SubtotalSection = Styled.SubtotalSection;
Cart.SubtotalLabel = Styled.SubtotalLabel;
Cart.SubtotalPrice = Styled.SubtotalPrice;
Cart.SubtotalAdditionalInfo = Styled.SubtotalAdditionalInfo;
Cart.QuantityControl = CartQuantity;
Cart.TableBodyEmptyStateRow = CartTableBodyEmptyStateRow;

export default Cart;
