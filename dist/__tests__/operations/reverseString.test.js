"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reverseString_1 = require("../../src/operations/reverseString");
describe("reverseString", () => {
  it("should reverse the string", () => {
    const result = (0, reverseString_1.reverseString)("Hello");
    expect(result).toBe("olleH");
  });
  it("should handle an empty string", () => {
    const result = (0, reverseString_1.reverseString)("");
    expect(result).toBe("");
  });
});
