import styled from 'styled-components';
import { getComponentThemeToken as getToken } from '@e-shop/theme';

const {
  root: rootToken,
  listItem: listItemToken,
  listItemName: listItemNameToken,
  listItemPrice: listItemPriceToken,
  listItemQuantity: listItemQuantityToken,
} = getToken('simpleCartList');

export const RootList = styled.ul`
  list-style: none;
  color: ${rootToken._base.color};
`;

export const ListItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 13rem 12.7rem;
  grid-template-areas: 'name quantity price';

  padding: 2rem 0;

  & + & {
    border-top: 1px solid ${listItemToken._base.borderColor};
  }
`;

export const ListItemName = styled.p`
  grid-area: name;

  font-family: ${listItemNameToken._base.fontFamily};
  font-weight: ${listItemNameToken._base.fontWeight};
  font-size: ${listItemNameToken._base.fontSize};
  line-height: ${listItemNameToken._base.lineHeight};
`;

export const ListItemQuantity = styled.strong`
  grid-area: quantity;
  text-align: center;
  font-family: ${listItemQuantityToken._base.fontFamily};
  font-weight: ${listItemQuantityToken._base.fontWeight};
  font-size: ${listItemQuantityToken._base.fontSize};
  line-height: ${listItemQuantityToken._base.lineHeight};
`;

export const ListItemPrice = styled.strong`
  grid-area: price;
  margin-left: 0.5rem;

  font-family: ${listItemPriceToken._base.fontFamily};
  font-weight: ${listItemPriceToken._base.fontWeight};
  font-size: ${listItemPriceToken._base.fontSize};
  line-height: ${listItemPriceToken._base.lineHeight};
`;
