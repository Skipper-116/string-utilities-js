import { passwordStrengthValidation } from '../../src/validations/passwordStrengthValidation';

describe('passwordStrengthValidation', () => {
    it('should validate a strong password', () => {
        const result = passwordStrengthValidation('Password123');
        expect(result).toBe(true);
    });

    it('should invalidate a weak password', () => {
        const result = passwordStrengthValidation('pass');
        expect(result).toBe(false);
    });
});