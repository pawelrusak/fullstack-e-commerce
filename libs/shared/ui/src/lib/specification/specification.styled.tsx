'use client';

import styled from 'styled-components';
import { getComponentThemeToken as getToken } from '@e-shop/theme';

const { property: propertyToken, details: detailsToken } =
  getToken('specification');

export const RootDescriptionList = styled.dl`
  font-family: ${({ theme }) => theme.fontFamily.poppins};

  & dd {
    margin-bottom: 1.6rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    display: grid;
    gap: 1.6rem 0;
    grid-template-columns: 17rem 1fr;

    & dd {
      margin-bottom: 0;
    }
  }
`;

export const DescriptionProperty = styled.dt`
  padding-right: 1rem;

  font-family: ${propertyToken._base.fontFamily};
  font-size: ${propertyToken._base.fontSize};
  line-height: ${propertyToken._base.lineHeight};
  font-weight: ${propertyToken._base.fontWeight};
  color: ${propertyToken._base.color};
`;

export const DescriptionDetails = styled.dd`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem 0.4rem;
  font-family: ${detailsToken._base.fontFamily};
  font-size: ${detailsToken._base.fontSize};
  line-height: ${detailsToken._base.lineHeight};
  font-weight: ${detailsToken._base.fontWeight};
  color: ${detailsToken._base.color};
`;
