"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passwordStrengthValidation_1 = require("../../src/validations/passwordStrengthValidation");
describe("passwordStrengthValidation", () => {
  it("should validate a strong password", () => {
    const result = (0, passwordStrengthValidation_1.passwordStrengthValidation)(
      "Password123",
    );
    expect(result).toBe(true);
  });
  it("should invalidate a weak password", () => {
    const result = (0, passwordStrengthValidation_1.passwordStrengthValidation)(
      "pass",
    );
    expect(result).toBe(false);
  });
});
