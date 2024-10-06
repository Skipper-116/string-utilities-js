import {
  urlValidation,
  ipV4Validation,
  ipV6Validation,
} from "../../src/validations/urlValidation";

describe("urlValidation", () => {
  it("should validate a correct URL", () => {
    const result = urlValidation("https://www.example.com");
    expect(result).toBe(true);
  });

  it("should invalidate an incorrect URL", () => {
    const result = urlValidation("invalid-url");
    expect(result).toBe(false);
  });
});

describe("ipV4Validation", () => {
  it("should validate a correct IPv4 address", () => {
    const result = ipV4Validation("192.168.0.1");
    expect(result).toBe(true);
  });

  it("should invalidate an incorrect IPv4 address", () => {
    const result = ipV4Validation("invalid-ip");
    expect(result).toBe(false);
  });
});

describe("ipV6Validation", () => {
  it("should validate a correct IPv6 address", () => {
    const result = ipV6Validation("2001:0db8:85a3:0000:0000:8a2e:0370:7334");
    expect(result).toBe(true);
  });

  it("should invalidate an incorrect IPv6 address", () => {
    const result = ipV6Validation("invalid-ip");
    expect(result).toBe(false);
  });
});
