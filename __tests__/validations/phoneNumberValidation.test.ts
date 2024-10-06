import { phoneNumberValidation, malawiPhoneNumberValidation, customPhoneNumberValidation } from '../../src/validations/phoneNumberValidation';

describe('phoneNumberValidation', () => {
    it('should validate a correct phone number', () => {
        const result = phoneNumberValidation('+1234567890');
        expect(result).toBe(true);
    });

    it('should invalidate an incorrect phone number', () => {
        const result = phoneNumberValidation('123-abc-7890');
        expect(result).toBe(false);
    });
});

describe('malawiPhoneNumberValidation', () => {
    it('should validate a correct Malawi phone number', () => {
        const result = malawiPhoneNumberValidation('0999123456');
        expect(result).toBe(true);
    });

    it('should invalidate an incorrect Malawi phone number', () => {
        const result = malawiPhoneNumberValidation('099912345');
        expect(result).toBe(false);
    });
});