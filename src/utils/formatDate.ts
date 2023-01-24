import { format } from "date-fns";

/**
 * Formatted date with hour
 * @param {Date} date - date for formatted
 * @return {string} - date formatted with hour
 */
export const getFormattedDateWithHour = (date: Date | string): string => {
  const dateFormatted = new Date(date);
  return format(dateFormatted, "dd/MM/yyyy HH:mm");
};

/**
 * Formatted hour
 * @param {Date} date - date for formatted
 * @return {string} - hour formatted
 **/

export const getFormattedHour = (date?: Date): string => {
  const today = new Date();
  if (date) {
    return `${_getHours(new Date(date).getHours())}:${_getMinutes(
      new Date(date).getMinutes(),
    )}`;
  }

  return `${_getHours(today.getHours())}:${_getMinutes(today.getMinutes())}`;
};

function _getMinutes(min: number): string | number {
  return String(min).length > 1 ? min : `0${min}`;
}

function _getHours(hour: number): string | number {
  return String(hour).length > 1 ? hour : `0${hour}`;
}
