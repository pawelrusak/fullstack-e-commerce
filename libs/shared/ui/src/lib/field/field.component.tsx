import * as Styled from './field.styled';
import { FieldProvider, useField } from './field.context';
import type { FieldContextParams } from './field.context';
import type { StyledLabelProps } from './field.styled';

export type FieldProps = React.ComponentPropsWithRef<'div'> &
  FieldContextParams;

export type FieldControlInputProps = React.ComponentPropsWithRef<'input'> & {
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
};

export function Field({ controlId, valid = true, ...props }: FieldProps) {
  return (
    <FieldProvider valid={valid} controlId={controlId}>
      <Styled.Container hasErrorColor={!valid} {...props} />
    </FieldProvider>
  );
}

export type FieldLabelProps = React.ComponentPropsWithRef<'label'> &
  StyledLabelProps;

export function FieldLabel(props: FieldLabelProps) {
  const { controlId } = useField();
  return <Styled.Label htmlFor={controlId} {...props} />;
}

export type FieldInputProps = React.ComponentPropsWithRef<'input'>;

export function FieldInput(props: FieldInputProps) {
  const { controlId } = useField();
  return (
    <Styled.Input
      id={controlId}
      aria-describedby={controlId ? `${controlId}-field-error` : undefined}
      {...props}
    />
  );
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
      <FieldInput {...params} />
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

export type FieldErrorProps = React.ComponentPropsWithRef<'strong'>;

function FieldError({ children, ...props }: FieldErrorProps) {
  const { controlId, valid } = useField();
  return (
    <Styled.Error
      id={`${controlId}-field-error`}
      data-testid="field-error"
      aria-live="polite"
      aria-atomic="true"
      role="alert"
      mt={valid ? 0 : undefined}
      {...props}
    >
      {!valid && children}
    </Styled.Error>
  );
}

Field.ControlInput = FieldControlInput;
Field.ControlIcon = Styled.ControlIcon;
Field.Label = Styled.Label;
Field.Help = Styled.Help;
Field.Control = Styled.Control;
Field.Input = FieldInput;
Field.Error = FieldError;

export default Field;
