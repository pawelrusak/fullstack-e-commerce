import React from 'react';

export type FieldContextParams = {
  controlId?: string;
  valid?: boolean;
};

export const FieldContext = React.createContext<FieldContextParams | undefined>(
  undefined,
);

export type FieldProviderProps = {
  children: React.ReactNode;
} & FieldContextParams;

export function FieldProvider({
  children,
  controlId,
  valid,
}: FieldProviderProps) {
  const defaultId = React.useId();

  return (
    <FieldContext.Provider value={{ controlId: controlId || defaultId, valid }}>
      {children}
    </FieldContext.Provider>
  );
}

export function useField() {
  const context = React.useContext(FieldContext);
  if (context === undefined) {
    throw new Error('useField must be used within a FieldProvider');
  }
  return context;
}
