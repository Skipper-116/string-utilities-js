import { emailValidation } from "../../src/validations/emailValidation";

describe("emailValidation", () => {
  it("should validate a correct email", () => {
    const result = emailValidation("test@example.com");
    expect(result).toBe(true);
  });

  it("should invalidate an incorrect email", () => {
    const result = emailValidation("invalid-email");
    expect(result).toBe(false);
  });
});
