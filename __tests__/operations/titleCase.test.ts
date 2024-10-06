import { titleCase } from '../../src/operations/titleCase';

describe('titleCase', () => {
  it('should convert to title case', () => {
    const result = titleCase('hello world from string utilities');
    expect(result).toBe('Hello World From String Utilities');
  });

  it('should handle single words', () => {
    const result = titleCase('hello');
    expect(result).toBe('Hello');
  });
});