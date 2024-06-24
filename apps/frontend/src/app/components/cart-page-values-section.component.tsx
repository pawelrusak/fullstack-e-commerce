'use client';

import styled from 'styled-components';
import ValuesSection from './values-section.component';
import { LayoutWrapper } from '@e-shop/ui';

const Wrapper = styled.div`
  border-top: 1px solid #cbcbcb;
  padding-top: clamp(2rem, 10vw + -3rem, 8rem);
  padding-bottom: clamp(2rem, 10vw + -3rem, 8rem);

  @media screen and (min-width: ${({ theme }) => theme.screens.lg}) {
    border-bottom: 1px solid #cbcbcb;
  }
`;

const CartValuesSection = styled(ValuesSection)`
  margin: 0;
`;

function CartPageValuesSection() {
  return (
    <Wrapper>
      <LayoutWrapper>
        <CartValuesSection />
      </LayoutWrapper>
    </Wrapper>
  );
}

export default CartPageValuesSection;
