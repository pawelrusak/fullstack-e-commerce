import * as Styled from './cart.styled';
import { Product } from '@e-shop/types';
import { VisuallyHidden } from '@reach/visually-hidden';

export type CartProps = React.ComponentPropsWithRef<'section'>;

export function Cart(props: CartProps) {
  return <Styled.SectionContainer {...props} />;
}

export type CartTableProps = React.ComponentPropsWithRef<'table'>;

export function CartTable(props: CartTableProps) {
  return <Styled.Table {...props} />;
}

export type CartTableHeadProps = {
  productTableHead?: React.ReactNode;
  priceTableHead?: React.ReactNode;
  quantityTableHead?: React.ReactNode;
  totalTableHead?: React.ReactNode;
  actionTableHead?: React.ReactNode;
};

export function CartTableHead({
  productTableHead = 'Product',
  priceTableHead = 'Price',
  quantityTableHead = 'Quantity',
  totalTableHead = 'Total',
  actionTableHead = <VisuallyHidden>Action</VisuallyHidden>,
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

export type CartTableBody = React.ComponentPropsWithRef<'tbody'>;

export function CartTableBody(props: CartTableBody) {
  return <Styled.TBody {...props} />;
}

export type CartTableBodyRowProps = {
  variant?: string;
  variantLabel?: React.ReactNode;
  quantity?: number;
  screenReaderRemoveButtonLabel?: string;
  price: React.ReactNode;
  totalPrice: React.ReactNode;
  name: React.ReactNode;
  category: React.ReactNode;
} & Pick<Product, 'thumbnail'>;

export function CartTableBodyRow({
  thumbnail,
  quantity = 1,
  category,
  name,
  variantLabel = 'Variant:',
  variant,
  price,
  totalPrice,
  screenReaderRemoveButtonLabel = 'Remove',
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
        <button>{screenReaderRemoveButtonLabel}</button>
      </Styled.TdAction>
    </Styled.Tr>
  );
}

Cart.Table = CartTable;
Cart.TableHead = CartTableHead;
Cart.TableBody = CartTableBody;
Cart.TableBodyRow = CartTableBodyRow;

export default Cart;
