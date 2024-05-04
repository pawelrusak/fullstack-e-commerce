export type Options = {
  locales: Intl.LocalesArgument;
} & Omit<Intl.NumberFormatOptions, 'style'>;

export function getCurrencyFormat(
  number: number,
  { locales, ...options }: Options = {
    locales: 'en-US',
    currency: 'USD',
  }
) {
  return new Intl.NumberFormat(locales, {
    style: 'currency',
    ...options,
  }).format(number);
}
