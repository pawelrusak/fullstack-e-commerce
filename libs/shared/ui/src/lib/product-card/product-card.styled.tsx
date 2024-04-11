import styled, { css } from 'styled-components';
import * as polished from 'polished';

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

export const CardArticle = styled.article`
  padding: 2.4rem;
  border-radius: 1rem;
  width: fit-content;
  max-width: 29rem;
  position: relative;
  color: ${({ theme }) => theme.color.text};
  border: 1px solid transparent;

  :hover,
  :focus {
    border-color: ${({ theme }) =>
      polished.transparentize(0.75, theme.color.text)};
  }

  :hover ${ButtonsSection}, :focus ${ButtonsSection} {
    visibility: visible;
  }
`;

export const Thumbnail = styled.img`
  width: 23.6rem;
  height: 21.4rem;
  display: block;
  object-fit: contain;
`;

export const ThumbnailContainer = styled.div`
  position: relative;
  margin-bottom: 4rem;
`;

type ButtonProps = {
  primary?: boolean;
};

export const Button = styled.button<ButtonProps>`
  all: unset;
  border: 1px solid ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.primary};
  background: ${({ theme }) => theme.color.background};
  height: 4.8rem;
  width: 4.8rem;
  text-align: center;
  vertical-align: middle;
  border-radius: 999px;
  cursor: pointer;

  ${({ primary }) =>
    primary &&
    css`
      background: ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.background};
    `}

  :hover, :focus {
    opacity: 0.9;
  }
`;

export const PriceOffBox = styled.strong`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(16px) translateX(-16px);
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.background};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding: 0.6rem 2rem;
  border-radius: 0.5rem;
`;

export const Category = styled.p`
  display: inline-block;
  text-transform: uppercase;
  font-size: 1.4rem;
  line-height: 2rem;
  margin-bottom: 1.6rem;
  letter-spacing: 0.3rem;
`;

export const Header = styled.header``;

export const Title = styled.h3`
  font-size: 2rem;
  line-height: 3rem;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const PriceContainer = styled.section`
  margin: 2.4rem 0 2rem;
`;

export const CurrentPrice = styled.strong`
  display: inline-block;
  font-size: 2.4rem;
  line-height: 3rem;
  color: ${({ theme }) => theme.color.primary};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  margin-right: 0.8rem;
`;

export const PastPrice = styled.span`
  font-size: 1.6rem;
  line-height: 2.4rem;
  opacity: 0.5;
  text-decoration: line-through;
`;
