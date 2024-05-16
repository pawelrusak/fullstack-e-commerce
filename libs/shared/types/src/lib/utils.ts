export type Modify<T, R> = Omit<T, keyof R> & R;

/**
 * @see {@link https://www.totaltypescript.com/concepts/the-prettify-helper}
 */
export type Prettify<T> = {
  [K in keyof T]: T[K];
  // eslint-disable-next-line @typescript-eslint/ban-types
} & {};

/**
 * @see {@link https://stackoverflow.com/questions/58434389/typescript-deep-keyof-of-a-nested-object}
 */
type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never;

/**
 * @see {@link https://stackoverflow.com/questions/58434389/typescript-deep-keyof-of-a-nested-object}
 */
// prettier-ignore
type Prev = [
  never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, ...0[]
];

/**
 * @see {@link https://stackoverflow.com/questions/58434389/typescript-deep-keyof-of-a-nested-object}
 */
export type Paths<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? {
      [K in keyof T]-?: K extends string | number
        ? `${K}` | Join<K, Paths<T[K], Prev[D]>>
        : never;
    }[keyof T]
  : '';
