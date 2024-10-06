import {
  phoneNumberValidation,
  malawiPhoneNumberValidation,
  customPhoneNumberValidation,
} from "../../src/validations/phoneNumberValidation";

describe("phoneNumberValidation", () => {
  it("should validate a correct phone number", () => {
    const result = phoneNumberValidation("+1234567890");
    expect(result).toBe(true);
  });

  it("should invalidate an incorrect phone number", () => {
    const result = phoneNumberValidation("123-abc-7890");
    expect(result).toBe(false);
  });
});

describe("malawiPhoneNumberValidation", () => {
  it("should validate a correct Malawi phone number", () => {
    const result = malawiPhoneNumberValidation("0999123467");
    expect(result).toBe(true);
  });

  it("should invalidate an incorrect Malawi phone number", () => {
    const result = malawiPhoneNumberValidation("099912345");
    expect(result).toBe(false);
  });
});

describe("customPhoneNumberValidation", () => {
  it("should validate a correct custom phone number", () => {
    const result = customPhoneNumberValidation("1234567890", "10");
    expect(result).toBe(true);
  });

  it("should invalidate an incorrect custom phone number", () => {
    const result = customPhoneNumberValidation("123-abc-7890", "10");
    expect(result).toBe(false);
  });
});
