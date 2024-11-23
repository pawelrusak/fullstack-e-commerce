import * as Styled from './simple-cart-list.styled';

export type SimpleCartListProps = React.ComponentPropsWithRef<'ul'>;

export function SimpleCartList(props: SimpleCartListProps) {
  return <Styled.RootList {...props} />;
}

SimpleCartList.Item = Styled.ListItem;
SimpleCartList.ItemName = Styled.ListItemName;
SimpleCartList.ItemQuantity = Styled.ListItemQuantity;
SimpleCartList.ItemPrice = Styled.ListItemPrice;

export default SimpleCartList;
