import * as Styled from './field.styled';
export type { StyledLabelProps as FieldLabelProps } from './field.styled';

/* eslint-disable-next-line */
export type FieldProps = React.ComponentPropsWithRef<'div'>;

export type FieldControlInputProps = React.ComponentPropsWithRef<'input'> & {
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
};

export function Field(props: FieldProps) {
  return <Styled.Container {...props} />;
}

function FieldControlInput({
  iconLeft,
  iconRight,
  ...params
}: FieldControlInputProps) {
  return (
    <Styled.Control
      hasLeftIcon={Boolean(iconLeft)}
      hasRightIcon={Boolean(iconRight)}
    >
      <Styled.Input {...params} />
      {iconLeft && (
        <Styled.ControlIcon isLeft data-testid="input-icon-left">
          {iconLeft}
        </Styled.ControlIcon>
      )}
      {iconRight && (
        <Styled.ControlIcon isRight data-testid="input-icon-right">
          {iconRight}
        </Styled.ControlIcon>
      )}
    </Styled.Control>
  );
}

Field.ControlInput = FieldControlInput;
Field.ControlIcon = Styled.ControlIcon;
Field.Label = Styled.Label;
Field.Help = Styled.Help;
Field.Control = Styled.Control;
Field.Input = Styled.Input;

export default Field;
