"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const trimAndLowercase_1 = require("../../src/operations/trimAndLowercase");
describe("trimAndLowercase", () => {
    it("should trim and convert to lowercase", () => {
        const result = (0, trimAndLowercase_1.trimAndLowercase)("  HELLO world  ");
        expect(result).toBe("hello world");
    });
    it("should handle an empty string", () => {
        const result = (0, trimAndLowercase_1.trimAndLowercase)("");
        expect(result).toBe("");
    });
});
