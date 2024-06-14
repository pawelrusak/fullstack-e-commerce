import {
  BaseQuantityControl,
  BaseQuantityControlProps,
} from '../../../base-quantity-control';
import { VisuallyHidden } from '@reach/visually-hidden';
import * as Styled from './cart-quantity-control.styled';
import { MinusSmallButton, PlusSmallButton } from '@e-shop/icons';

export type CartQuantityControlProps = Omit<
  BaseQuantityControlProps,
  'children'
>;

export function CartQuantityControl(props: CartQuantityControlProps) {
  return (
    <BaseQuantityControl {...props}>
      <Styled.QuantityContainer>
        <Styled.QuantityDecreaseButton>
          <MinusSmallButton aria-hidden />
          <VisuallyHidden>Reduce Product</VisuallyHidden>
        </Styled.QuantityDecreaseButton>
        <Styled.QuantityInput />
        <Styled.QuantityIncreaseButton>
          <PlusSmallButton aria-hidden />
          <VisuallyHidden>Add Product</VisuallyHidden>
        </Styled.QuantityIncreaseButton>
      </Styled.QuantityContainer>
    </BaseQuantityControl>
  );
}

export default CartQuantityControl;
