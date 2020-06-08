const capitalize = function(value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
};

const toDegreesFahrenheit = function(value) {
  return (value * 9/5) + 32
};

export { capitalize };
