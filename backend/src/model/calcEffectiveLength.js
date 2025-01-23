import getMultiplier from "./getMultiplier.js";
function calcEffectiveLength(length, height) {
  const a = parseFloat(length);
  let b = parseFloat(height);
  b = Math.abs(b);
  const multiplier = getMultiplier(a, b);
  b *= multiplier;

  if (height < 0) {
    const result = a - b;
    return Math.round(result * 10) / 10;
  } else if (height === 0) {
    return a;
  } else {
    const result = a + b;
    return Math.round(result * 10) / 10;
  }
}

export { calcEffectiveLength };
