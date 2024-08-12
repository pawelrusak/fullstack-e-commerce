import React from 'react';

/**
 * -----------------------------------------------------------------------------------
 *
 *                              RADIO GROUP TILES CONTEXT
 *
 * ------------------------------------------------------------------------------------
 */

export type RadioGroupTilesContextParams = {
  /**
   * The name attribute assigned to all radio inputs within the group.
   */
  radioGroupName?: string;
};

export const RadioGroupTilesContext = React.createContext<
  RadioGroupTilesContextParams | undefined
>(undefined);

export type RadioGroupTilesProviderProps = {
  children: React.ReactNode;
} & RadioGroupTilesContextParams;

export function RadioGroupTilesProvider({
  children,
  radioGroupName,
}: RadioGroupTilesProviderProps) {
  return (
    <RadioGroupTilesContext.Provider value={{ radioGroupName }}>
      {children}
    </RadioGroupTilesContext.Provider>
  );
}

export function useRadioGroupTiles() {
  const context = React.useContext(RadioGroupTilesContext);

  if (context === undefined) {
    throw new Error(
      'useRadioGroupTiles must be used within a RadioGroupTilesProvider',
    );
  }

  return context;
}

/**
 * -----------------------------------------------------------------------------------
 *
 *                          TILE OF RADIO GROUP TILES CONTEXT
 *
 * ------------------------------------------------------------------------------------
 */

export type TileContextParams = {
  controlId?: string;
};

export const TileContext = React.createContext<TileContextParams | undefined>(
  undefined,
);

export type TileProviderProps = {
  children: React.ReactNode;
} & TileContextParams;

export function TileProvider({ children, controlId }: TileProviderProps) {
  const defaultControlId = React.useId();

  return (
    <TileContext.Provider value={{ controlId: controlId || defaultControlId }}>
      {children}
    </TileContext.Provider>
  );
}

export function useTile() {
  const context = React.useContext(TileContext);

  if (context === undefined) {
    throw new Error('useTile must be used within a TileProvider');
  }

  return context;
}
