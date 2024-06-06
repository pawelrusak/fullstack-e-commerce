import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import { v4 as uuid } from 'uuid';
import { Product } from '@e-shop/types';
import { RootStore } from './root.store';

export type CartItem = {
  id: Product['_id'];
  productId: Product['_id'];
  product: Product;
  quantity: number;
  currentPrice: number;
  cartItemsTotalPrice: number;
};

export type CartItemPayload = Pick<CartItem, 'product' | 'quantity'>;

export class CartStore {
  public _cartItems: CartItem[] = [];
  public _rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, { _rootStore: false }, { autoBind: true });

    this._rootStore = rootStore;

    if (process.env.NODE_ENV !== 'test') {
      makePersistable(this, {
        name: 'cart-store',
        properties: ['_cartItems'],
        storage:
          typeof window !== 'undefined' ? window.localStorage : undefined,
      });
    }
  }

  /**
   * @deprecated Use `items` instead
   */
  get cartItems() {
    return this._cartItems;
  }

  get items() {
    return this._cartItems;
  }

  get itemsCount() {
    return this._cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }

  // TODO add shipping cost
  get totalPrice() {
    return this._cartItems.reduce(
      (acc, item) => acc + item.cartItemsTotalPrice,
      0,
    );
  }

  get totalItemsPrice() {
    return this._cartItems.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0,
    );
  }

  public addToCartOrUpdate(CartItemPayload: CartItemPayload) {
    const itemIndex = this._cartItems.findIndex(
      (item) => item.productId === CartItemPayload.product._id,
    );

    if (itemIndex !== -1) {
      this.updateExistingCartItem(itemIndex, CartItemPayload.quantity);
      return;
    }

    this.createNewCartItem(CartItemPayload);
  }

  public clean() {
    this._cartItems = [];
  }

  private createNewCartItem({ product, quantity }: CartItemPayload) {
    this._cartItems.push({
      id: uuid(),
      productId: product._id,
      product,
      quantity,
      currentPrice: product.price,
      cartItemsTotalPrice: product.price * quantity,
    });
  }

  public findByIdAndRemove(id: CartItem['id']) {
    const itemIndex = this._cartItems.findIndex((item) => item.id === id);

    if (itemIndex === -1) {
      return false;
    }

    this._cartItems.splice(itemIndex, 1);

    return true;
  }

  private updateExistingCartItem(
    itemIndex: number,
    quantity: CartItemPayload['quantity'],
  ) {
    const previousQuantity = this._cartItems[itemIndex].quantity;
    const updatedQuantity = previousQuantity + quantity;

    this._cartItems[itemIndex].quantity = updatedQuantity;
    this._cartItems[itemIndex].cartItemsTotalPrice =
      this._cartItems[itemIndex].currentPrice *
      this._cartItems[itemIndex].quantity;
  }

  public replaceQuantityOrRemove({ product, quantity }: CartItemPayload) {
    const itemIndex = this._cartItems.findIndex(
      (item) => item.productId === product._id,
    );

    if (itemIndex === -1) {
      return false;
    }

    if (quantity <= 0) {
      this._cartItems.splice(itemIndex, 1);
      return true;
    }

    this.replaceQuantityExistingCartItem(itemIndex, quantity);

    return true;
  }

  private replaceQuantityExistingCartItem(
    itemIndex: number,
    newQuantity: CartItemPayload['quantity'],
  ) {
    this._cartItems[itemIndex].quantity = newQuantity;
    this._cartItems[itemIndex].cartItemsTotalPrice =
      this._cartItems[itemIndex].currentPrice *
      this._cartItems[itemIndex].quantity;
  }
}
