/**
 * @see {@link https://github.com/akiran/react-slick/issues/742#issuecomment-460281987}
 */
window.matchMedia = jest.fn().mockImplementation((query) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
});
