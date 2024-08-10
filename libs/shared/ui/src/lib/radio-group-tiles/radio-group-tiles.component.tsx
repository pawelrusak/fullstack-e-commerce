import React from 'react';
import * as Styled from './radio-group-tiles.styled';

export type RadioGroupTilesProps = React.ComponentPropsWithoutRef<'fieldset'>;

export function RadioGroupTiles(props: RadioGroupTilesProps) {
  return <Styled.FieldsetWrapper {...props} />;
}

export type RadioGroupTilesTileRadioInputProps =
  React.ComponentPropsWithoutRef<'input'>;

const TileRadioInput = React.forwardRef<
  HTMLInputElement,
  RadioGroupTilesTileRadioInputProps
>(function (props, ref) {
  return <Styled.Input type="radio" {...props} ref={ref} />;
});

RadioGroupTiles.Tile = Styled.Tile;
RadioGroupTiles.TileRadioInput = TileRadioInput;
RadioGroupTiles.TileLabel = Styled.Label;
RadioGroupTiles.TileImage = Styled.Image;
RadioGroupTiles.TileAdditionalText = Styled.AdditionalText;

export default RadioGroupTiles;
