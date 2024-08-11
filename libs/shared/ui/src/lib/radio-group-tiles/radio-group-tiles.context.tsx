import React from 'react';

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
