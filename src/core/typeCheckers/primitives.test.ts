"use strict";
const { typeString } = require("./primitives");
describe("type tests", () => {
  test("Check number", () => {
    expect(() => typeString(10)).toThrow();
  });
  test("Check string", () => {
    expect(typeString("10")).toBe(undefined);
  });
});
