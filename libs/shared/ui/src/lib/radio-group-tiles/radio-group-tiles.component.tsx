import * as Styled from './radio-group-tiles.styled';

export type ShippingMethodListProps =
  React.ComponentPropsWithoutRef<'fieldset'>;

export function RadioGroupTiles(props: ShippingMethodListProps) {
  return <Styled.FieldsetWrapper {...props} />;
}

RadioGroupTiles.Tile = Styled.Tile;
RadioGroupTiles.TileRadioInput = Styled.Input;
RadioGroupTiles.TileLabel = Styled.Label;
RadioGroupTiles.TileImage = Styled.Image;
RadioGroupTiles.TileAdditionalText = Styled.AdditionalText;

export default RadioGroupTiles;
