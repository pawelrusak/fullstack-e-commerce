'use client';

import styled from 'styled-components';

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

  font-weight: ${({ theme }) => theme.fontWeight.bold};

  font-size: 2rem;
  line-height: 3rem;
`;

export const DescriptionDetails = styled.dd`
  font-size: 2rem;
  line-height: 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem 0.4rem;
`;
