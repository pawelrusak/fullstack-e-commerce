'use client';

import * as React from 'react';
import rootStore, { RootStore } from '../stores/root.store';

const StoreContext = React.createContext<RootStore | undefined>(undefined);

type StoreProviderProps = {
  children: React.ReactNode;
};

export function StoreProvider({ children }: StoreProviderProps) {
  return (
    <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
  );
}

export function useStore() {
  const context = React.useContext(StoreContext);

  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }

  return context;
}

export function useCartStore() {
  const context = React.useContext(StoreContext);

  if (context === undefined) {
    throw new Error('useCartStore must be used within a StoreProvider');
  }

  const cartStore = context.cart;

  return cartStore;
}
