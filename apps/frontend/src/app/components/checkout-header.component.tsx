'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { Heading, ProgressStepper } from '@e-shop/ui';
import { EN } from '@e-shop/i18n';

const Header = styled.header`
  margin-bottom: 8rem;
`;

const PageHeading = styled(Heading)`
  text-align: center;
  margin-bottom: 3.6rem;
`;

const CHECKOUT_STEPS = Object.freeze({
  INFORMATION: 'information',
  SHIPPING: 'shipping',
  PAYMENT: 'payment',
});

export type CheckoutStep = (typeof CHECKOUT_STEPS)[keyof typeof CHECKOUT_STEPS];

type CheckoutHeaderProps = {
  checkoutStep: CheckoutStep;
};

function CheckoutHeader(props: CheckoutHeaderProps) {
  return (
    <Header>
      <PageHeading>{EN.CHECKOUT.TITLE}</PageHeading>

      <ProgressStepper>
        <ProgressStepper.List>
          <ProgressStepper.ListItem
            isActive={props.checkoutStep === CHECKOUT_STEPS.INFORMATION}
          >
            <ProgressStepper.ListItemLink
              as={Link}
              href={`/checkout/${CHECKOUT_STEPS.INFORMATION}`}
            >
              {EN.CHECKOUT.STEPS.INFORMATION}
            </ProgressStepper.ListItemLink>
          </ProgressStepper.ListItem>
          <ProgressStepper.ListItem
            isActive={props.checkoutStep === CHECKOUT_STEPS.SHIPPING}
          >
            <ProgressStepper.ListItemLink
              as={Link}
              href={`/checkout/${CHECKOUT_STEPS.SHIPPING}`}
            >
              {EN.CHECKOUT.STEPS.SHIPPING}
            </ProgressStepper.ListItemLink>
          </ProgressStepper.ListItem>
          <ProgressStepper.ListItem
            isActive={props.checkoutStep === CHECKOUT_STEPS.PAYMENT}
          >
            <ProgressStepper.ListItemLink
              as={Link}
              href={`/checkout/${CHECKOUT_STEPS.PAYMENT}`}
            >
              {EN.CHECKOUT.STEPS.PAYMENT}
            </ProgressStepper.ListItemLink>
          </ProgressStepper.ListItem>
        </ProgressStepper.List>
      </ProgressStepper>
    </Header>
  );
}

export default CheckoutHeader;
