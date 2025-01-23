function getMultiplier(length, height) {
  const slope = (height / length) * 100;
  let multiplier;

  if (slope <= 10) multiplier = 3;
  else {
    const k = 0.1;
    multiplier = 3 + (slope - 10) * k;
  }
  return multiplier;
}

export default getMultiplier;
