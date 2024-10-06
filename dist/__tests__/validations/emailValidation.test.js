"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const emailValidation_1 = require("../../src/validations/emailValidation");
describe("emailValidation", () => {
  it("should validate a correct email", () => {
    const result = (0, emailValidation_1.emailValidation)("test@example.com");
    expect(result).toBe(true);
  });
  it("should invalidate an incorrect email", () => {
    const result = (0, emailValidation_1.emailValidation)("invalid-email");
    expect(result).toBe(false);
  });
});
