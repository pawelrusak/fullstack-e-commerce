import React from 'react';
import { CheckboxProps as RadixCheckboxProps } from '@radix-ui/react-checkbox';
import * as Styled from './checkbox.styled';
import { CheckSmallIcon } from '@e-shop/icons';

export type CheckboxProps = RadixCheckboxProps;

export function Checkbox({ children, ...props }: CheckboxProps) {
  return (
    <Styled.Wrapper {...props}>
      {children || (
        <Styled.Indicator>
          <CheckSmallIcon />
        </Styled.Indicator>
      )}
    </Styled.Wrapper>
  );
}

Checkbox.CheckIcon = CheckSmallIcon;
Checkbox.Indicator = Styled.Indicator;

export default Checkbox;
