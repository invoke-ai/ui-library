import { describe, it, expect } from "vitest";
import evaluateSimpleExpression from "./evaluate-simple-expression";

describe("evaluateSimpleExpression (basic arithmetic)", () => {
  it("handles addition", () => {
    expect(evaluateSimpleExpression("2 + 3")).toBe(5);
  });

  it("handles subtraction", () => {
    expect(evaluateSimpleExpression("10 - 4")).toBe(6);
  });

  it("handles multiplication", () => {
    expect(evaluateSimpleExpression("6 * 7")).toBe(42);
  });

  it("handles division", () => {
    expect(evaluateSimpleExpression("20 / 5")).toBe(4);
  });

  it("respects operator precedence", () => {
    expect(evaluateSimpleExpression("2 + 3 * 4")).toBe(14); // 2 + (3*4)
    expect(evaluateSimpleExpression("10 - 6 / 3")).toBe(8); // 10 - (6/3)
  });

  it("handles chained operations", () => {
    expect(evaluateSimpleExpression("512 * 2 + 5")).toBe(1029);
    expect(evaluateSimpleExpression("8 / 2 + 3 * 4")).toBe(16);
    expect(evaluateSimpleExpression("100 - 20 * 2 + 5")).toBe(65);
  });

  it("handles decimals", () => {
    expect(evaluateSimpleExpression("3.5 + 1.2")).toBeCloseTo(4.7, 10);
    expect(evaluateSimpleExpression("5.5 * 2")).toBeCloseTo(11, 10);
    expect(evaluateSimpleExpression("10.0 / 4")).toBeCloseTo(2.5, 10);
  });

  it("throws on invalid expressions", () => {
    expect(() => evaluateSimpleExpression("2 ++ 3")).toThrow();
    expect(() => evaluateSimpleExpression("foo + 2")).toThrow();
    expect(() => evaluateSimpleExpression("10 /")).toThrow();
    expect(() => evaluateSimpleExpression("")).toThrow();
  });
});
