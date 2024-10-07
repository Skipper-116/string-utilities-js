"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const urlValidation_1 = require("../../src/validations/urlValidation");
describe("urlValidation", () => {
    it("should validate a correct URL", () => {
        const result = (0, urlValidation_1.urlValidation)("https://www.example.com");
        expect(result).toBe(true);
    });
    it("should invalidate an incorrect URL", () => {
        const result = (0, urlValidation_1.urlValidation)("invalid-url");
        expect(result).toBe(false);
    });
});
describe("ipV4Validation", () => {
    it("should validate a correct IPv4 address", () => {
        const result = (0, urlValidation_1.ipV4Validation)("192.168.0.1");
        expect(result).toBe(true);
    });
    it("should invalidate an incorrect IPv4 address", () => {
        const result = (0, urlValidation_1.ipV4Validation)("invalid-ip");
        expect(result).toBe(false);
    });
});
describe("ipV6Validation", () => {
    it("should validate a correct IPv6 address", () => {
        const result = (0, urlValidation_1.ipV6Validation)("2001:0db8:85a3:0000:0000:8a2e:0370:7334");
        expect(result).toBe(true);
    });
    it("should invalidate an incorrect IPv6 address", () => {
        const result = (0, urlValidation_1.ipV6Validation)("invalid-ip");
        expect(result).toBe(false);
    });
});
