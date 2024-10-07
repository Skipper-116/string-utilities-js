import {
    isBlank,
    isPresent
} from '../../src/validations/validation';

describe('isBlank', () => {
    it('should return true for null', () => {
        const result = isBlank(null);
        expect(result).toBe(true);
    });

    it('should return true for undefined', () => {
        const result = isBlank(undefined);
        expect(result).toBe(true);
    });

    it('should return true for an empty string', () => {
        const result = isBlank('');
        expect(result).toBe(true);
    });

    it('should return true for a string with only whitespace', () => {
        const result = isBlank('   ');
        expect(result).toBe(true);
    });

    it('should return true for an empty array', () => {
        const result = isBlank([]);
        expect(result).toBe(true);
    });

    it('should return true for an empty object', () => {
        const result = isBlank({});
        expect(result).toBe(true);
    });

    it('should return false for a non-blank value', () => {
        const result = isBlank('hello');
        expect(result).toBe(false);
    });
});

describe('isPresent', () => {
    it('should return false for null', () => {
        const result = isPresent(null);
        expect(result).toBe(false);
    });

    it('should return false for undefined', () => {
        const result = isPresent(undefined);
        expect(result).toBe(false);
    });

    it('should return false for an empty string', () => {
        const result = isPresent('');
        expect(result).toBe(false);
    });

    it('should return false for a string with only whitespace', () => {
        const result = isPresent('   ');
        expect(result).toBe(false);
    });

    it('should return false for an empty array', () => {
        const result = isPresent([]);
        expect(result).toBe(false);
    });

    it('should return false for an empty object', () => {
        const result = isPresent({});
        expect(result).toBe(false);
    });

    it('should return true for a non-blank value', () => {
        const result = isPresent('hello');
        expect(result).toBe(true);
    });
});