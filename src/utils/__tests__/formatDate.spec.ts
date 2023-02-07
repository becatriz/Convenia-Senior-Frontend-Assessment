import { describe, it, expect } from "vitest";
import {
  getFormattedHour,
  getFormattedDateWithHour,
  _getHours,
  _getMinutes,
} from "../formatDate";

describe("Format Date", () => {
  it("Should formatted Hour", () => {
    expect(getFormattedHour(new Date("2023-01-24T01:12:19.836Z"))).equals(
      "22:12",
    );
  });

  it("Should formatted Hour undefined", () => {
    const today = new Date();
    expect(getFormattedHour(undefined)).equals(
      `${_getHours(today.getHours())}:${_getMinutes(today.getMinutes())}`,
    );
  });

  it("Should formatted Date with hour", () => {
    expect(
      getFormattedDateWithHour(new Date("2023-01-24T01:12:19.836Z")),
    ).equals("23/01/2023 22:12");
  });

  it("Should get Minutes formatted", () => {
    expect(_getMinutes(1)).equals("01");
  });

  it("Should get Hour formatted", () => {
    expect(_getHours(6)).equals("06");
  });
});
