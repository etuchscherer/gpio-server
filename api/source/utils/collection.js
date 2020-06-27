/**
 * Finds and removes the item from the collection. Returns the collection without the
 * item.
 * @param {array} collection
 * @param {string} key
 * @param {any} value
 */
export function remove(collection = [], key, value) {
  const index = collection.findIndex(obj => obj[key] === value);

  if (index >= 0) {
    return [...collection.slice(0, index), ...collection.slice(index + 1)];
  }

  return collection;
}