export type Modify<T, R> = Omit<T, keyof R> & R;

/**
 * @see {@link https://www.totaltypescript.com/concepts/the-prettify-helper}
 */
export type Prettify<T> = {
  [K in keyof T]: T[K];
  // eslint-disable-next-line @typescript-eslint/ban-types
} & {};
