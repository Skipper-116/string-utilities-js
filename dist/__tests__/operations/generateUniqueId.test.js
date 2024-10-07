"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateUniqueId_1 = require("../../src/operations/generateUniqueId");
describe("generateUniqueId", () => {
    it("should generate a unique ID with a prefix", () => {
        const result = (0, generateUniqueId_1.generateUniqueId)("user");
        expect(result).toMatch(/^user_/);
    });
    it("should generate a unique ID without a prefix", () => {
        const result = (0, generateUniqueId_1.generateUniqueId)();
        expect(result).toMatch(/^.{8,}$/);
    });
});
describe("generateUUIDv7", () => {
    it("should generate a UUID v7", () => {
        const result = (0, generateUniqueId_1.generateUUIDv7)();
        expect(result).toMatch(/^[a-f0-9]{8}-[a-f0-9]{4}-7[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/);
    });
});
