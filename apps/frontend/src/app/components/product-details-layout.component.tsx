'use client';

import React from 'react';
import styled from 'styled-components';
import { Divider } from '@e-shop/ui';

const LayoutArticle = styled.article`
  margin-top: clamp(2rem, 5vw + 0.4rem, 6.4rem);
`;

const SummaryContainer = styled.div`
  margin-bottom: 2.4rem;

  @media screen and (min-width: ${({ theme }) => theme.screens.xl}) {
    margin-bottom: 1.6rem;
    display: grid;
    grid-template-columns: 54.8% 41.5%;
    grid-template-rows: repeat(4, fit-content);
    grid-auto-rows: max-content;
    grid-template-areas:
      'gallery  header'
      'gallery  price'
      'gallery  specification'
      'gallery  none';
    justify-content: space-between;
    margin-bottom: 6.4rem;
  }
`;

const BreadcrumbWrapper = styled.div`
  margin-bottom: 1.6rem;
  overflow-y: scroll;

  @media screen and (min-width: ${({ theme }) => theme.screens.xl}) {
    margin-bottom: 4.8rem;
  }
`;

const LayoutHeader = styled.header`
  @media screen and (min-width: ${({ theme }) => theme.screens.xl}) {
    grid-area: header;
  }
`;

const PriceWrapper = styled.div`
  margin-bottom: 2.4rem;

  @media screen and (min-width: ${({ theme }) => theme.screens.xl}) {
    margin-bottom: 4.8rem;
    grid-area: price;
  }
`;

const SpecificationWrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.screens.xl}) {
    grid-area: specification;
  }
`;

const GalleryWrapper = styled.div`
  margin-bottom: 2.4rem;
  display: flex;
  justify-content: center;

  @media screen and (min-width: ${({ theme }) => theme.screens.xl}) {
    display: block;
    grid-area: gallery;
    margin-bottom: 0;
  }
`;

const MiddleContainer = styled.div`
  margin-bottom: 2.4rem;

  @media screen and (min-width: ${({ theme }) => theme.screens.xl}) {
    display: grid;
    grid-template-columns: 50% 47%;
    grid-template-areas: 'values  form';
    justify-content: space-between;
    align-items: end;
    margin-bottom: 10rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.xxl}) {
    grid-template-columns: 51.25% 42.57%;
  }
`;

const ValuesWrapper = styled.div`
  display: none;
  margin-bottom: 2.4rem;

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    display: block;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.xl}) {
    grid-area: values;
    margin-bottom: 0;
  }
`;

const FormWrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.screens.xl}) {
    grid-area: form;
  }
`;

const DetailsContainer = styled.div``;

export type ProductDetailsLayoutProps = {
  breadcrumb: React.ReactNode;
  heading: React.ReactNode;
  price: React.ReactNode;
  gallery: React.ReactNode;
  specification: React.ReactNode;
  values: React.ReactNode;
  form: React.ReactNode;
  details: React.ReactNode;
};

export default function ProductDetailsLayout({
  breadcrumb,
  heading,
  price,
  specification,
  gallery,
  values,
  form,
  details,
}: ProductDetailsLayoutProps) {
  return (
    <LayoutArticle>
      <BreadcrumbWrapper>{breadcrumb}</BreadcrumbWrapper>

      <SummaryContainer>
        <LayoutHeader>
          {heading}
          <Divider />
        </LayoutHeader>
        <PriceWrapper>{price}</PriceWrapper>
        <GalleryWrapper>{gallery}</GalleryWrapper>
        <SpecificationWrapper>{specification}</SpecificationWrapper>
      </SummaryContainer>
      <MiddleContainer>
        <ValuesWrapper>{values}</ValuesWrapper>
        <FormWrapper>{form}</FormWrapper>
      </MiddleContainer>
      <DetailsContainer>{details}</DetailsContainer>
    </LayoutArticle>
  );
}
