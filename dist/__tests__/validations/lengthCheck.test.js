"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lengthCheck_1 = require("../../src/validations/lengthCheck");
describe('lengthCheck', () => {
    it('should validate the length of a string within the given range', () => {
        const result = (0, lengthCheck_1.lengthCheck)('Hello World', 5, 20);
        expect(result).toBe(true);
    });
    it('should invalidate a string outside the given length range', () => {
        const result = (0, lengthCheck_1.lengthCheck)('Hi', 5, 10);
        expect(result).toBe(false);
    });
});
