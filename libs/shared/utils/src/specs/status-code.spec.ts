import { STATUS_CODE } from '../lib/status-code';

describe('STATUS_CODE', () => {
  it('should be frozen', () => {
    expect(Object.isFrozen(STATUS_CODE)).toBe(true);
  });

  it('should have a specific shape', () => {
    expect(STATUS_CODE).toMatchInlineSnapshot(`
      {
        "CREATED": 201,
        "NOT_IMPLEMENTED": 501,
        "OK": 200,
      }
    `);
  });
});
