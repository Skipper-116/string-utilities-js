import { trimAndLowercase } from '../../src/operations/trimAndLowercase';

describe('trimAndLowercase', () => {
  it('should trim and convert to lowercase', () => {
    const result = trimAndLowercase('  HELLO world  ');
    expect(result).toBe('hello world');
  });

  it('should handle an empty string', () => {
    const result = trimAndLowercase('');
    expect(result).toBe('');
  });
});