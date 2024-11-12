import styled from 'styled-components';
import { Badge } from '../badge';
import { getComponentThemeToken as getToken } from '@e-shop/theme';

const {
  root: rootToken,
  thumbnail: thumbnailToken,
  category: categoryToken,
  title: titleToken,
  currentPrice: currentPriceToken,
  pastPrice: pastPriceToken,
} = getToken('productCard');

export const ButtonsSection = styled.section`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.6rem 0;
  display: flex;
  justify-content: center;
  gap: 1.8rem;
  visibility: hidden;
`;

export const RootArticle = styled.article`
  padding: 2.4rem;
  border-radius: 1rem;
  width: fit-content;
  max-width: 29rem;
  position: relative;
  color: ${rootToken._base.color};
  background-color: ${rootToken._base.backgroundColor};
  border: 1px solid ${rootToken.default.initial.borderColor};

  &:hover,
  &:focus {
    border-color: ${rootToken.default.interact.borderColor};
  }

  &:hover ${ButtonsSection}, &:focus ${ButtonsSection} {
    visibility: visible;
  }
`;

export const Thumbnail = styled.img`
  width: 23.6rem;
  height: 21.4rem;
  display: block;
  object-fit: contain;

  &[src$='placeholder-view.svg'] {
    background-color: ${thumbnailToken._base.backgroundColor};
    border-radius: 1rem;
  }
`;

export const ThumbnailContainer = styled.div`
  position: relative;
  margin-bottom: 4rem;
`;

export const PriceOffBox = styled(Badge)`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(16px) translateX(-16px);
`;

export const Category = styled.p`
  display: inline-block;
  text-transform: ${categoryToken._base.textTransform};
  font-family: ${categoryToken._base.fontFamily};
  font-size: ${categoryToken._base.fontSize};
  line-height: ${categoryToken._base.lineHeight};
  font-weight: ${categoryToken._base.fontWeight};
  margin-bottom: 1.6rem;
  letter-spacing: ${categoryToken._base.letterSpacing};
`;

export const Header = styled.header``;

export const Title = styled.h3`
  font-family: ${titleToken._base.fontFamily};
  font-size: ${titleToken._base.fontSize};
  line-height: ${titleToken._base.lineHeight};
  font-weight: ${titleToken._base.fontWeight};
  display: -webkit-box;
  -webkit-line-clamp: ${titleToken._base.lineClamp};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const PriceContainer = styled.section`
  margin: 2.4rem 0 2rem;
`;

export const CurrentPrice = styled.strong`
  display: inline-block;
  color: ${currentPriceToken._base.color};
  font-family: ${currentPriceToken._base.fontFamily};
  font-size: ${currentPriceToken._base.fontSize};
  line-height: ${currentPriceToken._base.lineHeight};
  font-weight: ${currentPriceToken._base.fontWeight};
  margin-right: 0.8rem;
`;

export const PastPrice = styled.span`
  color: ${pastPriceToken._base.color};
  font-size: ${pastPriceToken._base.fontSize};
  line-height: ${pastPriceToken._base.lineHeight};
  font-weight: ${pastPriceToken._base.fontWeight};
  line-height: ${pastPriceToken._base.lineHeight};
  text-decoration: line-through;
`;
