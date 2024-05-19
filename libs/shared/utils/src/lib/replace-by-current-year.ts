type Options = {
  pattern?: string;
};

// TODO create test for this function
export function replaceByCurrentYear(
  str: string,
  { pattern = ':year:' }: Options = {}
) {
  return str.replace(pattern, new Date().getFullYear().toString());
}
