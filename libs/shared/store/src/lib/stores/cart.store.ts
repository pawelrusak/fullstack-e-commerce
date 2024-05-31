import { Product } from '@e-shop/types';

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

  get totalPrice() {
    return this._cartItems.reduce(
      (acc, item) => acc + item.cartItemsTotalPrice,
      0
    );
  }

  public addToCartOrUpdate(CartItemPayload: CartItemPayload) {
    const itemIndex = this._cartItems.findIndex(
      (item) => item.productId === CartItemPayload.product._id
    );

    if (itemIndex !== -1) {
      this.updateExistingCartItem(itemIndex, CartItemPayload.quantity);
      return;
    }

    this.createNewCartItem(CartItemPayload);
  }

  private createNewCartItem({ product, quantity }: CartItemPayload) {
    this._cartItems.push({
      // TODO use some kind of unique id
      id: product._id,
      productId: product._id,
      product,
      quantity,
      currentPrice: product.price,
      cartItemsTotalPrice: product.price * quantity,
    });
  }

  private updateExistingCartItem(
    itemIndex: number,
    quantity: CartItemPayload['quantity']
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
      (item) => item.productId === product._id
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
    newQuantity: CartItemPayload['quantity']
  ) {
    this._cartItems[itemIndex].quantity = newQuantity;
    this._cartItems[itemIndex].cartItemsTotalPrice =
      this._cartItems[itemIndex].currentPrice *
      this._cartItems[itemIndex].quantity;
  }
}

export const cartStore = new CartStore();

export default cartStore;
