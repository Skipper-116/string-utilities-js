import { findAndReplace } from '../../src/operations/findAndReplace';

describe('findAndReplace', () => {
  it('should replace all occurrences of a substring', () => {
    const result = findAndReplace('Hello World! Hello Everyone!', 'Hello', 'Hi');
    expect(result).toBe('Hi World! Hi Everyone!');
  });

  it('should return the original string if no match is found', () => {
    const result = findAndReplace('Hello World!', 'Goodbye', 'Hi');
    expect(result).toBe('Hello World!');
  });
});