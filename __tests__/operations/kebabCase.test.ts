import {
  kebabCase,
  camelCase,
  pascalCase,
  snakeCase,
} from "../../src/operations/kebabCase";

describe("kebabCase", () => {
  it("should convert to kebab case", () => {
    const result = kebabCase("Hello World");
    expect(result).toBe("hello-world");
  });

  it("should handle strings with special characters", () => {
    const result = kebabCase("Hello World! How are you?");
    expect(result).toBe("hello-world!-how-are-you?");
  });
});

describe("camelCase", () => {
  it("should convert to camel case", () => {
    const result = camelCase("Hello World");
    expect(result).toBe("helloWorld");
  });

  it("should handle strings with special characters", () => {
    const result = camelCase("Hello World! How are you?");
    expect(result).toBe("helloWorld!HowAreYou?");
  });
});

describe("pascalCase", () => {
  it("should convert to pascal case", () => {
    const result = pascalCase("Hello World");
    expect(result).toBe("HelloWorld");
  });

  it("should handle strings with special characters", () => {
    const result = pascalCase("Hello World! How are you?");
    expect(result).toBe("HelloWorld!HowAreYou?");
  });
});

describe("snakeCase", () => {
  it("should convert to snake case", () => {
    const result = snakeCase("Hello World");
    expect(result).toBe("hello_world");
  });

  it("should handle strings with special characters", () => {
    const result = snakeCase("Hello World! How are you?");
    expect(result).toBe("hello_world!_how_are_you?");
  });
});
