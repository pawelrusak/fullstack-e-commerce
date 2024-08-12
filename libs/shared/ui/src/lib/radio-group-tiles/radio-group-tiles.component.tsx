import React from 'react';
import * as Styled from './radio-group-tiles.styled';
import { TileProvider, useTile } from './radio-group-tiles.context';

import type { TileContextParams } from './radio-group-tiles.context';

export type RadioGroupTilesProps = React.ComponentPropsWithoutRef<'fieldset'>;

export function RadioGroupTiles(props: RadioGroupTilesProps) {
  return <Styled.FieldsetWrapper {...props} />;
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

    return <Styled.Input type="radio" id={controlId} {...props} ref={ref} />;
  },
);

type TileLabelProps = React.ComponentPropsWithoutRef<'label'>;

function TileLabel(props: TileLabelProps) {
  const { controlId } = useTile();

  return <Styled.Label htmlFor={controlId} {...props} />;
}

RadioGroupTiles.Tile = Tile;
RadioGroupTiles.TileRadioInput = TileRadioInput;
RadioGroupTiles.TileLabel = TileLabel;
RadioGroupTiles.TileImage = Styled.Image;
RadioGroupTiles.TileAdditionalText = Styled.AdditionalText;

export default RadioGroupTiles;

export type RadioGroupTilesTileRadioInputProps = TileRadioInputProps;
export type RadioGroupTilesTileLabelProps = TileLabelProps;
