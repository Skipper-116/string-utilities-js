"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const alphanumericCheck_1 = require("../../src/validations/alphanumericCheck");
describe('alphanumericCheck', () => {
    it('should validate an alphanumeric string', () => {
        const result = (0, alphanumericCheck_1.alphanumericCheck)('abc123');
        expect(result).toBe(true);
    });
    it('should invalidate a non-alphanumeric string', () => {
        const result = (0, alphanumericCheck_1.alphanumericCheck)('abc-123!');
        expect(result).toBe(false);
    });
});
