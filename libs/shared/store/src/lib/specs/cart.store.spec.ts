import { CartStore } from '../stores/cart.store';
import { faker } from '@faker-js/faker';
import { productFactory } from '@e-shop/factories';

describe('CartStore', () => {
  it('should add new item to cart', () => {
    const cartStore = new CartStore();
    const product = productFactory();
    const quantity = faker.number.int({ min: 1, max: 10 });
    const cartItem = { product, quantity };

    expect(cartStore.cartItems.length).toBe(0);

    cartStore.addToCartOrUpdate(cartItem);

    expect(cartStore.cartItems.length).toBe(1);
    expect(cartStore.cartItems).toEqual([
      {
        id: product._id,
        productId: product._id,
        product,
        quantity,
        currentPrice: product.price,
        cartItemsTotalPrice: product.price * quantity,
      },
    ]);
  });

  it('should update existing item in cart', () => {
    const cartStore = new CartStore();
    const product = productFactory();
    const quantityOne = faker.number.int({ min: 1, max: 10 });
    const quantityTwo = faker.number.int({ min: 1, max: 10 });
    const cartItem = { product, quantity: quantityOne };

    expect(cartStore.cartItems.length).toBe(0);

    cartStore.addToCartOrUpdate(cartItem);

    expect(cartStore.cartItems.length).toBe(1);
    expect(cartStore.cartItems).toEqual([
      {
        id: cartItem.product._id,
        productId: cartItem.product._id,
        product: cartItem.product,
        quantity: quantityOne,
        currentPrice: cartItem.product.price,
        cartItemsTotalPrice: cartItem.product.price * quantityOne,
      },
    ]);

    const updatedCartItem = { product, quantity: quantityTwo };

    cartStore.addToCartOrUpdate(updatedCartItem);

    const totalQuantity = quantityOne + quantityTwo;

    expect(cartStore.cartItems.length).toBe(1);
    expect(cartStore.cartItems).toEqual([
      {
        id: updatedCartItem.product._id,
        productId: updatedCartItem.product._id,
        product: updatedCartItem.product,
        quantity: totalQuantity,
        currentPrice: updatedCartItem.product.price,
        cartItemsTotalPrice: updatedCartItem.product.price * totalQuantity,
      },
    ]);
  });
});
