import * as Styled from './simple-cart-list.styled';

export type SimpleCartListProps = React.ComponentPropsWithRef<'ul'>;

export function SimpleCartList(props: SimpleCartListProps) {
  return <Styled.List {...props} />;
}

SimpleCartList.Item = Styled.ListItem;
SimpleCartList.ItemName = Styled.ItemName;
SimpleCartList.ItemQuantity = Styled.ItemQuantity;
SimpleCartList.ItemPrice = Styled.ItemPrice;

export default SimpleCartList;
