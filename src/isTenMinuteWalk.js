const isTenMinuteWalk = (directions) => {
  const directionCount = { e: 0, w: 0 };
  for (let direction of directions) {
    directionCount[direction] += 1;
  }
  return directionCount.e === directionCount.w;
};

export default isTenMinuteWalk;
