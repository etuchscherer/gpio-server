const capitalize = function(value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
};

const toDegreesFahrenheit = function(value) {
  const degrees = (value * 9) / 5 + 32;
  return degrees.toFixed(1);
};

export { capitalize, toDegreesFahrenheit };
