import { kebabCase } from '../../src/operations/kebabCase';

describe('kebabCase', () => {
  it('should convert to kebab case', () => {
    const result = kebabCase('Hello World');
    expect(result).toBe('hello-world');
  });

  it('should handle strings with special characters', () => {
    const result = kebabCase('Hello World! How are you?');
    expect(result).toBe('hello-world-how-are-you');
  });
});