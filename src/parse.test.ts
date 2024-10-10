import { describe, expect, it } from "vitest";

import { parse } from "./parse";

describe("readme", () => {
  it("hi", () => {
    expect(parse()).toBe("hi");
  });
});
