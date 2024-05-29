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

  get cartItems() {
    return this._cartItems;
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
}

export const cartStore = new CartStore();

export default cartStore;
