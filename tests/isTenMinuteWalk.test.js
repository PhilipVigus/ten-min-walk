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

  it("returns false for ['w', 's', 'e', 's', 's', 'e', 's', 'w', 'n', 'n']", () => {
    expect(
      isTenMinuteWalk(["w", "s", "e", "s", "s", "e", "s", "w", "n", "n"])
    ).toBe(false);
  });
});
