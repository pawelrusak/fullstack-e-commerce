import styled, { css } from 'styled-components';
import { CardIcon } from '@e-shop/icons';
import {
  IconButton as BaseIconButton,
  ICON_BUTTON_VARIANT,
} from '../icon-button';

import { getComponentThemeToken as getToken } from '@e-shop/theme';

const {
  tableBody: tableBodyToken,
  tableHead: tableHeadToken,
  tableProductCategory: tableProductCategoryToken,
  tableProductName: tableProductNameToken,
  tableProductThumbnail: tableProductThumbnailToken,
  tableProductVariantDetails: tableProductVariantDetailsToken,
  tableProductVariantLabel: tableProductVariantLabelToken,
  tableProductPrice: tableProductPriceToken,
  summaryCouponSection: summaryCouponSectionToken,
  summaryCouponApplyButton: summaryCouponApplyButtonToken,
  subtotalSection: subtotalSectionToken,
  subtotalLabel: subtotalLabelToken,
  subtotalPrice: subtotalPriceToken,
  subtotalAdditionalInfo: subtotalAdditionalInfoToken,
  emptyStateIcon: emptyStateIconToken,
  emptyStateTitle: emptyStateTitleToken,
  emptyStateParagraph: emptyStateParagraphToken,
} = getToken('cart');

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
    font-family: ${tableHeadToken._base.fontFamily};
    font-weight: ${tableHeadToken._base.fontWeight};
    line-height: ${tableHeadToken._base.lineHeight};
    font-size: ${tableHeadToken._base.fontSize};
    text-transform: ${tableHeadToken._base.textTransform};
    background-color: ${tableHeadToken._base.backgroundColor};
    color: ${tableHeadToken._base.color};
    text-align: left;
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
          border: 1px solid ${tableBodyToken.default.initial.borderColor};
          border-radius: 1rem;
        }

        ${ActionButtons} {
          opacity: 0;
        }

        &:hover,
        &:focus,
        &:focus-within {
          &::after {
            border-color: ${tableBodyToken.default.interact.borderColor};
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
    background-color: ${tableProductThumbnailToken._base.backgroundColor};
    border: 1px solid transparent;
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
  text-transform: ${tableProductCategoryToken._base.textTransform};
  font-size: ${tableProductCategoryToken._base.fontSize};
  line-height: ${tableProductCategoryToken._base.lineHeight};
  margin-bottom: 1.6rem;
  letter-spacing: 0.3rem;
`;

export const ProductName = styled.strong`
  font-size: ${tableProductNameToken._base.fontSize};
  line-height: ${tableProductNameToken._base.lineHeight};
  font-weight: ${tableProductNameToken._base.fontWeight};
  font-family: ${tableProductNameToken._base.fontFamily};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  width: 31.4rem;
`;

export const ProductVariant = styled.span`
  font-size: ${tableProductVariantDetailsToken._base.fontSize};
  line-height: ${tableProductVariantDetailsToken._base.lineHeight};
  margin-top: auto;
`;

export const ProductVariantLabel = styled.span`
  font-size: ${tableProductVariantLabelToken._base.fontSize};
  line-height: ${tableProductVariantLabelToken._base.lineHeight};
  font-weight: ${tableProductVariantLabelToken._base.fontWeight};
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
  font-size: ${tableProductPriceToken._base.fontSize};
  line-height: ${tableProductPriceToken._base.lineHeight};
  font-weight: ${tableProductPriceToken._base.fontWeight};
  font-family: ${tableProductPriceToken._base.fontFamily};
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

export const IconButton = styled(BaseIconButton).attrs<StyledButtonProps>(
  ({ primary }) => ({
    size: 'large',
    variant: primary
      ? ICON_BUTTON_VARIANT.PRIMARY
      : ICON_BUTTON_VARIANT.OUTLINE_PRIMARY,
  }),
)<StyledButtonProps>`
  z-index: 10;
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
  border: 1px solid ${summaryCouponSectionToken._base.borderColor};

  font-weight: ${summaryCouponSectionToken._base.fontWeight};
  line-height: ${summaryCouponSectionToken._base.lineHeight};
  font-size: ${summaryCouponSectionToken._base.fontSize};
  font-family: ${summaryCouponSectionToken._base.fontFamily};
  color: ${summaryCouponSectionToken._base.color};
  background-color: ${summaryCouponSectionToken._base.backgroundColor};

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

  font-family: ${summaryCouponApplyButtonToken._base.fontFamily};
  font-size: ${summaryCouponApplyButtonToken._base.fontSize};
  font-weight: ${summaryCouponApplyButtonToken._base.fontWeight};
  line-height: ${summaryCouponApplyButtonToken._base.lineHeight};
  color: ${summaryCouponApplyButtonToken.default.initial.color};

  cursor: pointer;

  text-decoration: underline;
  text-decoration-thickness: 2px;

  padding-left: 1.6rem;

  &:hover,
  &:focus {
    color: ${summaryCouponApplyButtonToken.default.interact.color};
  }
`;

export const SubtotalSection = styled.section`
  background-color: ${subtotalSectionToken._base.backgroundColor};
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
  font-weight: ${subtotalLabelToken._base.fontWeight};
  font-size: ${subtotalLabelToken._base.fontSize};
  line-height: ${subtotalLabelToken._base.lineHeight};
  text-transform: ${subtotalLabelToken._base.textTransform};
  font-family: ${subtotalLabelToken._base.fontFamily};
  color: ${subtotalLabelToken._base.color};
  padding-right: 1.6rem;

  grid-area: label;
`;

export const SubtotalPrice = styled.strong`
  font-family: ${subtotalPriceToken._base.fontFamily};
  font-weight: ${subtotalPriceToken._base.fontWeight};
  font-size: ${subtotalPriceToken._base.fontSize};
  line-height: ${subtotalPriceToken._base.lineHeight};

  color: ${subtotalPriceToken._base.color};

  grid-area: price;
`;

export const SubtotalAdditionalInfo = styled.span`
  font-size: ${subtotalAdditionalInfoToken._base.fontSize};
  line-height: ${subtotalAdditionalInfoToken._base.lineHeight};
  font-family: ${subtotalAdditionalInfoToken._base.fontFamily};
  font-weight: ${subtotalAdditionalInfoToken._base.fontWeight};

  color: ${subtotalAdditionalInfoToken._base.color};

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
  scale: ${emptyStateIconToken._base.scale};
  height: ${emptyStateIconToken._base.height};
  width: ${emptyStateIconToken._base.width};
  margin-bottom: ${emptyStateIconToken._base.marginBottom};
  color: ${emptyStateIconToken._base.color};
`;

export const EmptyStateTitle = styled.h2`
  font-family: ${emptyStateTitleToken._base.fontFamily};
  font-weight: ${emptyStateTitleToken._base.fontWeight};
  font-size: ${emptyStateTitleToken._base.fontSize};
  line-height: ${emptyStateTitleToken._base.lineHeight};
  color: ${emptyStateTitleToken._base.color};
  margin-bottom: 0.8rem;
`;

export const EmptyStateParagraph = styled.p`
  font-size: ${emptyStateParagraphToken._base.fontSize};
  line-height: ${emptyStateParagraphToken._base.lineHeight};
  font-family: ${emptyStateParagraphToken._base.fontFamily};
  font-weight: ${emptyStateParagraphToken._base.fontWeight};
  color: ${emptyStateParagraphToken._base.color};
`;
