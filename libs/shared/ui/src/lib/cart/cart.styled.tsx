import styled, { css } from 'styled-components';
import * as polished from 'polished';
import { CardIcon } from '@e-shop/icons';

/* TODO use variable */
const lightGrey = '#F4F4F4';

const CART_MAX_WIDTH = '152rem';

export const SectionContainer = styled.section`
  max-width: ${CART_MAX_WIDTH};
  margin-bottom: clamp(1.6rem, 1.667vw + 1.067rem, 3.2rem);
`;

export const Root = styled.div`
  overflow-x: scroll;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: ${CART_MAX_WIDTH};
`;

export const THead = styled.thead`
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

export type StyledTBodyProps = {
  removeThBorder?: boolean;
};

export const TBody = styled.tbody<StyledTBodyProps>`
  ${({ removeThBorder }) =>
    !removeThBorder &&
    css`
      & > tr {
        position: relative;

        &::after {
          position: absolute;
          content: ' ';

          inset: 0;
          border: 1px solid transparent;
          border-radius: 1rem;
        }

        ${ActionButtons} {
          opacity: 0;
        }

        &:hover,
        &:focus,
        &:focus-within {
          &::after {
            /* TODO use variable */
            border-color: #cbcbcb;
          }

          ${ActionButtons} {
            opacity: 1;
          }
        }
      }
    `}
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
  padding-right: 1.6rem;
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
  &:focus {
    background-color: ${({ theme }) =>
      polished.darken(0.1, theme.color.primary)};
    border-color: ${({ theme }) => polished.darken(0.1, theme.color.primary)};
    color: ${({ theme }) => theme.color.background};
  }

  &:focus {
    outline: auto;
  }

  ${({ primary }) =>
    primary &&
    css`
      background-color: ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.background};
    `}
`;

// ================================= Summary Cell =================================

export const SummarySection = styled.section`
  padding-top: 0.4rem;

  display: flex;
  flex-direction: column-reverse;
  align-items: end;
  gap: 1.6rem;

  @media screen and (min-width: ${({ theme }) => theme.screens.xl}) {
    display: flex;
    flex-direction: row;
  }
`;

const subSummarySectionCss = css`
  max-width: 61.8rem;
  width: 100%;
  padding: 2.4rem 1.6rem;

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    padding: 3.2rem 3.6rem;
  }

  border-radius: 1rem;
`;

export const CouponSection = styled.section`
  border: 1px solid transparent;
  /* TODO use variable */
  border-color: #e5e5e5;

  font-weight: 1.6rem;
  line-height: 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }

  ${subSummarySectionCss}
`;

export const CouponActionButton = styled.button`
  all: unset;
  display: block;

  font-family: ${({ theme }) => theme.fontFamily.poppins};

  font-size: 2rem;
  line-height: 3rem;

  cursor: pointer;

  text-decoration: underline;
  text-decoration-thickness: 2px;

  padding-left: 1.6rem;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const SubtotalSection = styled.section`
  background-color: ${lightGrey};
  margin-left: auto;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 13.8rem auto;
    grid-template-areas: 'label price additional';
  }

  ${subSummarySectionCss}
`;

export const SubtotalLabel = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 1.6rem;
  line-height: 2.4rem;
  text-transform: uppercase;
  padding-right: 1.6rem;

  grid-area: label;
`;

export const SubtotalPrice = styled.strong`
  font-family: ${({ theme }) => theme.fontFamily.poppins};

  font-size: 2.4rem;
  line-height: 3rem;
  color: ${({ theme }) => theme.color.primary};

  font-weight: ${({ theme }) => theme.fontWeight.semiBold};

  grid-area: price;
`;

export const SubtotalAdditionalInfo = styled.span`
  font-size: 1.4rem;
  line-height: 2rem;

  grid-area: additional;
`;

// ================================= Empty State =================================

export const TdEmptyState = styled.td`
  padding: 2.4rem 1.6rem;
  height: 33rem;
`;

export const EmptyStateHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

export const EmptyStateCartIcon = styled(CardIcon)`
  scale: 2.5;
  height: 3rem;
  width: 3rem;
  height: 3rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.color.primary};
`;

export const EmptyStateTitle = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.poppins};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 3.6rem;
  line-height: 4.6rem;
  margin-bottom: 0.8rem;
`;

export const EmptyStateParagraph = styled.p`
  font-size: 2rem;
  line-height: 3rem;
`;
