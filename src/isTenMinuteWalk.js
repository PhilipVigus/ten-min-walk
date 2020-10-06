const isTenMinuteWalk = (directions) => {
  const directionCount = { e: 0, w: 0, n: 0, s: 0 };

  for (let direction of directions) {
    directionCount[direction] += 1;
  }

  const doDirectionsCancel =
    directionCount.e === directionCount.w &&
    directionCount.n === directionCount.s;

  return doDirectionsCancel;
};

export default isTenMinuteWalk;
