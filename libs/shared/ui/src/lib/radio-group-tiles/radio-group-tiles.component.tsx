import React from 'react';
import * as Styled from './radio-group-tiles.styled';
import { TileProvider, useTile } from './radio-group-tiles.context';

export type RadioGroupTilesProps = React.ComponentPropsWithoutRef<'fieldset'>;

export function RadioGroupTiles(props: RadioGroupTilesProps) {
  return <Styled.FieldsetWrapper {...props} />;
}

export type TileProps = React.ComponentPropsWithoutRef<'div'>;

export function Tile(props: TileProps) {
  return (
    <TileProvider>
      <Styled.Tile {...props} />
    </TileProvider>
  );
}

export type RadioGroupTilesTileRadioInputProps =
  React.ComponentPropsWithoutRef<'input'>;

const TileRadioInput = React.forwardRef<
  HTMLInputElement,
  RadioGroupTilesTileRadioInputProps
>(function (props, ref) {
  const { controlId } = useTile();

  return <Styled.Input type="radio" id={controlId} {...props} ref={ref} />;
});

RadioGroupTiles.Tile = Tile;
RadioGroupTiles.TileRadioInput = TileRadioInput;
RadioGroupTiles.TileLabel = Styled.Label;
RadioGroupTiles.TileImage = Styled.Image;
RadioGroupTiles.TileAdditionalText = Styled.AdditionalText;

export default RadioGroupTiles;
