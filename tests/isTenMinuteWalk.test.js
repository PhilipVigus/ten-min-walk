import isTenMinuteWalk from "../src/isTenMinuteWalk";

describe("isTenMinuteWalk", () => {
  it("returns true for w, e", () => {
    expect(isTenMinuteWalk(["w", "e"])).toBe(true);
  });

  it("returns false for e, e", () => {
    expect(isTenMinuteWalk(["e", "e"])).toBe(false);
  });

  it("returns true for n, n", () => {
    expect(isTenMinuteWalk(["n", "n"])).toBe(false);
  });
});
