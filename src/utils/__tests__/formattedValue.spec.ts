import { describe, it, expect } from "vitest";
import { getFormattedValue } from "../formattedValue";

describe("Format Value money", () => {
  it("Should formatted value with rate", () => {
    expect(getFormattedValue(100.0, 2)).equals(50);
  });

  it("Should formatted without", () => {
    expect(getFormattedValue(100.0, undefined)).equals(100.0);
  });
});
