import { alphanumericCheck } from '../../src/validations/alphanumericCheck';

describe('alphanumericCheck', () => {
    it('should validate an alphanumeric string', () => {
        const result = alphanumericCheck('abc123');
        expect(result).toBe(true);
    });

    it('should invalidate a non-alphanumeric string', () => {
        const result = alphanumericCheck('abc-123!');
        expect(result).toBe(false);
    });
});