import moment from 'moment';

/**
 * Returns a string representation of a timestamp.
 * Enforce consistant formatting across the api here.
 * @returns {string}
 */
export function timestamp() {
  return moment().format();
}