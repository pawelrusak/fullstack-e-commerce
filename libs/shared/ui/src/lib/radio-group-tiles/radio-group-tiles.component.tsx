import React from 'react';
import * as Styled from './radio-group-tiles.styled';
import {
  TileProvider,
  useTile,
  RadioGroupTilesProvider,
  useRadioGroupTiles,
} from './radio-group-tiles.context';

import type {
  TileContextParams,
  RadioGroupTilesContextParams,
} from './radio-group-tiles.context';

type RadioGroupTilesValidationProps = {
  /**
   * These props are used to set the aria-required and role="radiogroup" attributes on the fieldset element.
   *
   * @see {@link https://adrianroselli.com/2022/02/support-for-marking-radio-buttons-required-invalid.html#Results | Support for Marking Radio Buttons Required, Invalid}
   */
  required?: boolean;
  /**
   * These props are used to set the aria-invalid attribute on the fieldset element. If used then required="true" prop is required.
   */
  valid?: boolean;
};

export type RadioGroupTilesProps = React.ComponentPropsWithoutRef<'fieldset'> &
  RadioGroupTilesContextParams &
  RadioGroupTilesValidationProps;

export function RadioGroupTiles(props: RadioGroupTilesProps) {
  const ariaRequired = props.required ? true : undefined;
  const role = props.required ? 'radiogroup' : undefined;

  const valid = props.valid ? true : false;
  const invalid = props.valid === undefined ? undefined : !valid;

  return (
    <RadioGroupTilesProvider radioGroupName={props.radioGroupName}>
      <Styled.FieldsetWrapper
        aria-required={ariaRequired}
        aria-invalid={invalid}
        role={role}
        {...props}
      />
    </RadioGroupTilesProvider>
  );
}

export type TileProps = React.ComponentPropsWithoutRef<'div'> &
  TileContextParams;

export function Tile(props: TileProps) {
  return (
    <TileProvider controlId={props.controlId}>
      <Styled.Tile {...props} />
    </TileProvider>
  );
}

export type TileRadioInputProps = React.ComponentPropsWithoutRef<'input'>;

const TileRadioInput = React.forwardRef<HTMLInputElement, TileRadioInputProps>(
  function (props, ref) {
    const { controlId } = useTile();
    const { radioGroupName } = useRadioGroupTiles();

    return (
      <Styled.Input
        type="radio"
        id={controlId}
        name={radioGroupName}
        {...props}
        ref={ref}
      />
    );
  },
);

type TileLabelProps = React.ComponentPropsWithoutRef<'label'>;

function TileLabel(props: TileLabelProps) {
  const { controlId } = useTile();

  return <Styled.Label htmlFor={controlId} {...props} />;
}

type AdditionalTextProps = React.ComponentPropsWithoutRef<'p'>;

function AdditionalText(props: AdditionalTextProps) {
  const { controlId } = useTile();

  return <Styled.AdditionalText aria-details={controlId} {...props} />;
}

RadioGroupTiles.Tile = Tile;
RadioGroupTiles.TileRadioInput = TileRadioInput;
RadioGroupTiles.TileLabel = TileLabel;
RadioGroupTiles.TileImage = Styled.Image;
RadioGroupTiles.TileAdditionalText = AdditionalText;

export default RadioGroupTiles;

export type RadioGroupTilesTileRadioInputProps = TileRadioInputProps;
export type RadioGroupTilesTileLabelProps = TileLabelProps;
export type RadioGroupTilesTileAdditionalTextProps = AdditionalTextProps;
