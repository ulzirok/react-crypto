export function percentDiff(price, currentPrice) {
  return +(100 * Math.abs((price - currentPrice) / ((price + currentPrice) / 2))).toFixed(2);
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substr(1)
}