"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const titleCase_1 = require("../../src/operations/titleCase");
describe("titleCase", () => {
  it("should convert to title case", () => {
    const result = (0, titleCase_1.titleCase)(
      "hello world from string utilities",
    );
    expect(result).toBe("Hello World From String Utilities");
  });
  it("should handle single words", () => {
    const result = (0, titleCase_1.titleCase)("hello");
    expect(result).toBe("Hello");
  });
});
