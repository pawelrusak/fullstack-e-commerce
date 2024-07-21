import { STATUS_CODE } from '../lib/status-code';

describe('STATUS_CODE', () => {
  it('should be frozen', () => {
    expect(Object.isFrozen(STATUS_CODE)).toBe(true);
  });

  it('should have a specific shape', () => {
    expect(STATUS_CODE).toMatchInlineSnapshot(`
      {
        "BAD_REQUEST": 400,
        "CREATED": 201,
        "INTERNAL_SERVER_ERROR": 500,
        "NOT_FOUND": 404,
        "NOT_IMPLEMENTED": 501,
        "OK": 200,
        "UNPROCESSABLE_CONTENT": 422,
      }
    `);
  });
});
