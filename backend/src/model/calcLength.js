function calcHoleLength(length, height, unit) {
  const lengthFloat = parseFloat(length);
  const heightFloat = parseFloat(height);

  const a = lengthFloat * lengthFloat;
  const b = heightFloat * heightFloat;
  const result = Math.sqrt(a + b).toFixed(1);
  return result;
}

export { calcHoleLength };
