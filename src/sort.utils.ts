export function sortAscending<T>(items: T[]): T[] {
  if (items === null || items === undefined || !Array.isArray(items)) {
    throw new Error('Argument "items" should be provided as an array');
  }

  return items.sort();
}

export function sortDescending() {}
