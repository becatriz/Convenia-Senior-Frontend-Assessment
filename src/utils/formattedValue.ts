/**
 * Formatted value with decimal
 * @param {number} value - value money
 * @return {number} rate - rate conversion currency
 **/

export const getFormattedValue = (
  value: number,
  rate: number | undefined,
): number => {
  if (rate && rate > 1) {
    return Number((value / rate).toFixed(2));
  }

  return value;
};
