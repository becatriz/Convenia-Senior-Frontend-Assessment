import { describe, it, expect } from "vitest";
import { getFormattedHour, getFormattedDateWithHour } from "../formatDate";

describe("Format Date", () => {
  it("Should formatted Hour", () => {
    expect(getFormattedHour(new Date("2023-01-24T01:12:19.836Z"))).equals(
      "21:12",
    );
  });

  it("Should formatted Date with hour", () => {
    expect(
      getFormattedDateWithHour(new Date("2023-01-24T01:12:19.836Z")),
    ).equals("23/01/2023 21:12");
  });
});
