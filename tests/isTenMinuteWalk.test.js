import isTenMinuteWalk from "../src/isTenMinuteWalk";

describe("isTenMinuteWalk", () => {
  it("returns true for w, e", () => {
    expect(isTenMinuteWalk(["w", "e"])).toBe(true);
  });
});
