import {
  generateUniqueId,
  generateUUIDv7,
} from "../../src/operations/generateUniqueId";

describe("generateUniqueId", () => {
  it("should generate a unique ID with a prefix", () => {
    const result = generateUniqueId("user");
    expect(result).toMatch(/^user_/);
  });

  it("should generate a unique ID without a prefix", () => {
    const result = generateUniqueId();
    expect(result).toMatch(/^.{8,}$/);
  });
});

describe("generateUUIDv7", () => {
  // it("should generate a UUID v7", () => {
  //   const result = generateUUIDv7();
  //   expect(result).toMatch(
  //     /^[a-f0-9]{8}-[a-f0-9]{4}-7[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/,
  //   );
  // });

  it("should generate different UUIDs on subsequent calls", () => {
    const result1 = generateUUIDv7();
    const result2 = generateUUIDv7();
    expect(result1).not.toBe(result2);
  });

  it("should generate a UUID of correct length", () => {
    const result = generateUUIDv7();
    expect(result.length).toBe(36);
  });
});
