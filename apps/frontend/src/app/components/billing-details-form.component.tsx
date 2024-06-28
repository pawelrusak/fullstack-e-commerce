'use client';

import styled from 'styled-components';
import { EN } from '@e-shop/i18n';
import { Field, Panel, Heading, SimpleCartList, Button } from '@e-shop/ui';
import { getCurrencyFormat } from '@e-shop/utils';
import { withStore, useHydrationCartStore } from '@e-shop/store';

const Form = styled.form`
  display: grid;
  gap: 3.2rem;
  grid-template-columns: 1fr;

  @media screen and (min-width: ${({ theme }) => theme.screens.lg}) {
    grid-template-columns: 2fr 1fr;
    gap: 5.6rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.xl}) {
    grid-template-columns: 1fr 59.4rem;
    gap: 5.6rem;
  }
`;

const FormTitle = styled(Heading)`
  margin-bottom: 4rem;
`;

const InformationFields = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.screens.xl}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 3.2rem;
  }
`;

const WideField = styled(Field)`
  grid-column: span 2;
`;

const CheckoutPanel = styled(Panel)`
  display: flex;
  flex-direction: column;
`;

const CheckoutPanelTitle = styled(Panel.Title)`
  margin-bottom: 2.8rem;
`;

const SummaryBox = styled.div`
  margin-top: auto;
  background-color: ${({ theme }) => theme.color.background};
  padding: 2.4rem 2.1rem;
  border-radius: 1rem;
`;

const SummaryBoxInner = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin-bottom: 2.4rem;
`;

const SummaryBoxKey = styled.div`
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const SummaryBoxValue = styled.div`
  margin-left: auto;
  width: fit-content;
  min-width: 10.6rem;
  font-size: 2rem;
  line-height: 3rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

// TODO Improve layout for mobile devices
function BillingDetailsForm() {
  const { cartStore, isHydrated } = useHydrationCartStore();

  return (
    <Form>
      <div>
        <FormTitle as="h2" level={2}>
          {EN.CHECKOUT.INFORMATION.FORM.TITLE}
        </FormTitle>
        <InformationFields>
          <Field>
            <Field.Label isRequired>
              {EN.CHECKOUT.INFORMATION.FORM.FIELD.FIRST_NAME.LABEL}
            </Field.Label>
            <Field.ControlInput
              placeholder={
                EN.CHECKOUT.INFORMATION.FORM.FIELD.FIRST_NAME.PLACEHOLDER
              }
              type="text"
            />
          </Field>

          <Field>
            <Field.Label isRequired>
              {EN.CHECKOUT.INFORMATION.FORM.FIELD.LAST_NAME.LABEL}
            </Field.Label>
            <Field.ControlInput
              placeholder={
                EN.CHECKOUT.INFORMATION.FORM.FIELD.LAST_NAME.PLACEHOLDER
              }
              type="text"
            />
          </Field>

          <Field>
            <Field.Label isRequired>
              {EN.CHECKOUT.INFORMATION.FORM.FIELD.PHONE_NUMBER.LABEL}
            </Field.Label>
            <Field.ControlInput
              placeholder={
                EN.CHECKOUT.INFORMATION.FORM.FIELD.PHONE_NUMBER.PLACEHOLDER
              }
              type="text"
            />
          </Field>

          <Field>
            <Field.Label isRequired>
              {EN.CHECKOUT.INFORMATION.FORM.FIELD.EMAIL_ADDRESS.LABEL}
            </Field.Label>
            <Field.ControlInput
              placeholder={
                EN.CHECKOUT.INFORMATION.FORM.FIELD.EMAIL_ADDRESS.PLACEHOLDER
              }
              type="email"
            />
          </Field>

          <WideField>
            <Field.Label isRequired>
              {EN.CHECKOUT.INFORMATION.FORM.FIELD.ADDRESS.LABEL}
            </Field.Label>
            <Field.ControlInput
              placeholder={
                EN.CHECKOUT.INFORMATION.FORM.FIELD.ADDRESS.PLACEHOLDER
              }
              type="text"
            />
          </WideField>

          <Field>
            <Field.Label isRequired>
              {EN.CHECKOUT.INFORMATION.FORM.FIELD.COUNTRY.LABEL}
            </Field.Label>
            <Field.ControlInput
              placeholder={
                EN.CHECKOUT.INFORMATION.FORM.FIELD.COUNTRY.PLACEHOLDER
              }
              type="text"
            />
          </Field>

          <Field>
            <Field.Label isRequired>
              {EN.CHECKOUT.INFORMATION.FORM.FIELD.STATE.LABEL}
            </Field.Label>
            <Field.ControlInput
              placeholder={EN.CHECKOUT.INFORMATION.FORM.FIELD.STATE.PLACEHOLDER}
              type="text"
            />
          </Field>

          <Field>
            <Field.Label isRequired>
              {EN.CHECKOUT.INFORMATION.FORM.FIELD.CITY.LABEL}
            </Field.Label>
            <Field.ControlInput
              placeholder={EN.CHECKOUT.INFORMATION.FORM.FIELD.CITY.PLACEHOLDER}
              type="text"
            />
          </Field>

          <Field>
            <Field.Label isRequired>
              {EN.CHECKOUT.INFORMATION.FORM.FIELD.POSTAL_CODE.LABEL}
            </Field.Label>
            <Field.ControlInput
              placeholder={
                EN.CHECKOUT.INFORMATION.FORM.FIELD.POSTAL_CODE.PLACEHOLDER
              }
              type="text"
            />
          </Field>

          <WideField mb={0}>
            <Field.Label>
              {EN.CHECKOUT.INFORMATION.FORM.FIELD.ORDER_NOTES.LABEL}
            </Field.Label>
            <Field.Input
              rows="4"
              as="textarea"
              placeholder={
                EN.CHECKOUT.INFORMATION.FORM.FIELD.ORDER_NOTES.PLACEHOLDER
              }
            />
          </WideField>
        </InformationFields>
      </div>

      <CheckoutPanel>
        <CheckoutPanelTitle>{EN.CHECKOUT.PANEL.TITLE}</CheckoutPanelTitle>

        {isHydrated ? (
          <SimpleCartList>
            {cartStore.items.map((item) => (
              <SimpleCartList.Item key={item.id}>
                <SimpleCartList.ItemName>
                  {item.product.name}
                </SimpleCartList.ItemName>
                <SimpleCartList.ItemQuantity>
                  {item.quantity}
                </SimpleCartList.ItemQuantity>
                <SimpleCartList.ItemPrice>
                  {getCurrencyFormat(item.cartItemsTotalPrice)}
                </SimpleCartList.ItemPrice>
              </SimpleCartList.Item>
            ))}
          </SimpleCartList>
        ) : (
          'Loading...'
        )}

        <SummaryBox>
          <SummaryBoxInner>
            <SummaryBoxKey>{EN.CHECKOUT.PANEL.SUBTOTAL}</SummaryBoxKey>
            <SummaryBoxValue>
              {getCurrencyFormat(cartStore.totalItemsPrice)}
            </SummaryBoxValue>
          </SummaryBoxInner>
          <Button type="submit" fullWidth>
            {EN.CHECKOUT.INFORMATION.FORM.SUBMIT_BUTTON}
          </Button>
        </SummaryBox>
      </CheckoutPanel>
    </Form>
  );
}

export default withStore(BillingDetailsForm);
