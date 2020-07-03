export function sortAscending<T>(items: T[]): T[] {
  if (items === null || items === undefined || !Array.isArray(items)) {
    throw new Error('Argument "items" should be provided as an array');
  }

  return [...items].sort((a, b) => (typeof a === 'string' && typeof b === 'string' ? a.localeCompare(b) : a > b ? 1 : a < b ? -1 : 0));
}

export function sortDescending() {}
