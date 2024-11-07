function calcEffectiveLength(length, height) {
  const a = parseFloat(length);
  let b = parseFloat(height);
  b = Math.abs(b);
  b *= 3;

  if (height < 0) {
    const result = a - b;
    return result;
  } else if (height === 0) {
    return a;
  } else {
    const result = a + b;
    return result;
  }
}

export { calcEffectiveLength };
