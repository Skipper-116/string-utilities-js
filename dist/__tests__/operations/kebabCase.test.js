"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kebabCase_1 = require("../../src/operations/kebabCase");
describe('kebabCase', () => {
    it('should convert to kebab case', () => {
        const result = (0, kebabCase_1.kebabCase)('Hello World');
        expect(result).toBe('hello-world');
    });
    it('should handle strings with special characters', () => {
        const result = (0, kebabCase_1.kebabCase)('Hello World! How are you?');
        expect(result).toBe('hello-world!-how-are-you?');
    });
});
