import styled, { css } from 'styled-components';

export const RootList = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 13rem 12.7rem;
  grid-template-areas: 'name quantity price';

  padding: 2rem 0;

  & + & {
    border-top: 1px solid #c3c3c3;
  }
`;

const itemTextCss = css`
  font-size: 2rem;
  line-height: 3rem;
`;

export const ListItemName = styled.p`
  grid-area: name;

  ${itemTextCss}
`;

export const ListItemQuantity = styled.strong`
  grid-area: quantity;

  text-align: center;

  ${itemTextCss}
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const ListItemPrice = styled.strong`
  grid-area: price;
  margin-left: 0.5rem;

  ${itemTextCss}
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;
