import { VisuallyHidden } from '@reach/visually-hidden';
import { EN } from '@e-shop/i18n';
import { PlusIcon, MinusIcon } from '@e-shop/icons';
import * as Styled from './quantity-selection.styled';

export type QuantitySelectionProps = {
  maxQuantity?: string;
};

export function QuantitySelection(props: QuantitySelectionProps) {
  return (
    <Styled.Fieldset>
      <VisuallyHidden as="legend">
        {EN.QUANTITY_SELECTION.FIELDSET}
      </VisuallyHidden>
      <Styled.Wrapper>
        <Styled.Button type="button">
          <VisuallyHidden>{EN.QUANTITY_SELECTION.DECREASE}</VisuallyHidden>
          <MinusIcon aria-hidden />
        </Styled.Button>
        <Styled.Button type="button" backgroundColor="#f4f4f4" order="3">
          <VisuallyHidden>{EN.QUANTITY_SELECTION.INCREASE}</VisuallyHidden>
          <PlusIcon aria-hidden />
        </Styled.Button>
        <div>
          <VisuallyHidden as="label" htmlFor="quantity">
            {EN.QUANTITY_SELECTION.INPUT_LABEL}
          </VisuallyHidden>
          <Styled.Input
            type="number"
            id="quantity"
            defaultValue={0}
            min={0}
            max={props.maxQuantity}
          />
        </div>
      </Styled.Wrapper>
    </Styled.Fieldset>
  );
}

export default QuantitySelection;
