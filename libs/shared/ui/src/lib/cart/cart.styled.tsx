import styled, { css } from 'styled-components';
import * as polished from 'polished';

const lightGrey = '#F4F4F4';

export const SectionContainer = styled.section`
  overflow-x: scroll;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 152rem;
`;

export const THead = styled.thead`
  border-radius: 15px;

  & tr:first-child th {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    text-align: left;
    font-weight: 1.6rem;
    line-height: 2.4rem;
    text-transform: uppercase;
    background-color: ${lightGrey};
    padding-top: 3.2rem;
    padding-bottom: 3.2rem;
  }

  & tr:first-child th:first-child {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    padding-left: 5.6rem;
  }

  & tr:first-child th:last-child {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
`;

export const TBody = styled.tbody`
  & > tr {
    position: relative;
    &::after {
      position: absolute;
      content: ' ';

      inset: 0;
      border: 1px solid transparent;
      border-radius: 1rem;
    }

    &:hover,
    &:focus,
    &:focus-within {
      &::after {
        border-color: ${({ theme }) =>
          polished.transparentize(0.75, theme.color.text)};
      }
    }
  }
`;

export const Tr = styled.tr`
  min-height: 29.4rem;
`;

const tableProductCellCss = css`
  width: 49.21%;
  min-width: 66rem;
`;

// ================================= Product Cell =================================

export const ThProduct = styled.th`
  ${tableProductCellCss};
`;

export const TdProduct = styled.td`
  ${tableProductCellCss};
  padding: 2.4rem 1.2rem 2.4rem 3.6rem;
`;

export const ProductInner = styled.div`
  display: flex;
  align-items: center;
  width: 29.4rem;
`;

export const ProductThumbnail = styled.img`
  width: 23.7rem;
  height: 21.4rem;
  display: block;
  object-fit: contain;
  margin-right: 6.2rem;

  &[src$='placeholder-view.svg'] {
    background-color: #d0d0d0;
    border-radius: 1rem;
  }
`;

export const ProductDetails = styled.div`
  width: 100%;
  max-width: 31.4rem;
  height: 16.6rem;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const ProductCategory = styled.span`
  display: inline-block;
  text-transform: uppercase;
  font-size: 1.4rem;
  line-height: 2rem;
  margin-bottom: 1.6rem;
  letter-spacing: 0.3rem;
`;

export const ProductName = styled.strong`
  font-size: 2rem;
  line-height: 3rem;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  width: 31.4rem;
`;

const productVariantCss = css`
  font-size: 1.6rem;
  line-height: 2.4rem;
`;

export const ProductVariant = styled.span`
  ${productVariantCss};
  margin-top: auto;
`;

export const ProductVariantLabel = styled.span`
  ${productVariantCss};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

// ================================= Price Cell =================================

const tablePriceCellCss = css`
  width: 14.67%;
`;

const verticalAlignCss = css`
  vertical-align: middle;
`;

export const ThPrice = styled.th`
  ${tablePriceCellCss};
`;

export const TdPrice = styled.td`
  ${tablePriceCellCss};
  ${verticalAlignCss};
`;

const priceCss = css`
  font-size: 2rem;
  line-height: 3rem;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const Price = styled.strong`
  ${priceCss};
`;

export const PriceTotal = styled.strong`
  ${priceCss};
`;

// ================================= Quantity Cell =================================

const tableQuantityCellCss = css`
  width: 15.59%;
  padding-right: 1.6rem;
`;

export const ThQuantity = styled.th`
  ${tableQuantityCellCss};
`;

export const TdQuantity = styled.td`
  ${tableQuantityCellCss};
  ${verticalAlignCss};
`;

const tableTotalCellCss = css`
  width: 13.16%;
`;

export const ThTotal = styled.th`
  ${tableTotalCellCss};
`;

export const TdTotal = styled.td`
  ${tableTotalCellCss};
  ${verticalAlignCss};
`;

// ================================= Action Cell =================================

const tableActionCellCss = css`
  width: 7.37%;
`;

export const ThAction = styled.th`
  ${tableActionCellCss};
`;

export const TdAction = styled.td`
  ${tableActionCellCss};
  vertical-align: top;
`;

export const ActionButtons = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 3.8rem;

  height: 100%;
  min-height: 29.4rem;
`;

export type StyledButtonProps = {
  primary?: boolean;
};

export const IconButton = styled.button<StyledButtonProps>`
  all: unset;
  display: block;
  box-sizing: border-box;
  padding: 1.6rem;
  display: flex;
  place-items: center;
  height: 6.4rem;
  width: 6.4rem;
  border: 1px solid ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.primary};
  border-radius: 999px;
  cursor: pointer;
  z-index: 10;

  &:hover,
  :focus {
    background-color: ${({ theme }) =>
      polished.darken(0.1, theme.color.primary)};
    border-color: ${({ theme }) => polished.darken(0.1, theme.color.primary)};
    color: ${({ theme }) => theme.color.background};
  }

  ${({ primary }) =>
    primary &&
    css`
      background-color: ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.background};
    `}
`;
