import { CartStore } from './cart.store';

export class RootStore {
  cart: CartStore = new CartStore(this);
}

export const rootStore = new RootStore();

export default rootStore;
