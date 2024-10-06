import { reverseString } from '../../src/operations/reverseString';

describe('reverseString', () => {
  it('should reverse the string', () => {
    const result = reverseString('Hello');
    expect(result).toBe('olleH');
  });

  it('should handle an empty string', () => {
    const result = reverseString('');
    expect(result).toBe('');
  });
});