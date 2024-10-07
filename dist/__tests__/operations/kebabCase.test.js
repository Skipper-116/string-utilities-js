"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kebabCase_1 = require("../../src/operations/kebabCase");
describe("kebabCase", () => {
    it("should convert to kebab case", () => {
        const result = (0, kebabCase_1.kebabCase)("Hello World");
        expect(result).toBe("hello-world");
    });
    it("should handle strings with special characters", () => {
        const result = (0, kebabCase_1.kebabCase)("Hello World! How are you?");
        expect(result).toBe("hello-world!-how-are-you?");
    });
});
describe("camelCase", () => {
    it("should convert to camel case", () => {
        const result = (0, kebabCase_1.camelCase)("Hello World");
        expect(result).toBe("helloWorld");
    });
    it("should handle strings with special characters", () => {
        const result = (0, kebabCase_1.camelCase)("Hello World! How are you?");
        expect(result).toBe("helloWorld!HowAreYou?");
    });
});
describe("pascalCase", () => {
    it("should convert to pascal case", () => {
        const result = (0, kebabCase_1.pascalCase)("Hello World");
        expect(result).toBe("HelloWorld");
    });
    it("should handle strings with special characters", () => {
        const result = (0, kebabCase_1.pascalCase)("Hello World! How are you?");
        expect(result).toBe("HelloWorld!HowAreYou?");
    });
});
describe("snakeCase", () => {
    it("should convert to snake case", () => {
        const result = (0, kebabCase_1.snakeCase)("Hello World");
        expect(result).toBe("hello_world");
    });
    it("should handle strings with special characters", () => {
        const result = (0, kebabCase_1.snakeCase)("Hello World! How are you?");
        expect(result).toBe("hello_world!_how_are_you?");
    });
});
