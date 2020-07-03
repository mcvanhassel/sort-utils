type SortableType = string | boolean | number | bigint;

export function sortAscending<T extends SortableType>(items: T[]): T[] {
  validateItems(items);

  return [...items].sort((a, b) => compare(a, b));
}

export function sortDescending<T extends SortableType>(items: T[]): T[] {
  validateItems(items);

  return [...items].sort((a, b) => -1 * compare(a, b));
}

function validateItems<T>(items: T[]): void {
  if (items === null || items === undefined || !Array.isArray(items)) {
    throw new Error('Argument "items" should be provided as an array');
  }
}

function compare(a: SortableType, b: SortableType): number {
  return typeof a === 'string' && typeof b === 'string' ? a.localeCompare(b) : a > b ? 1 : a < b ? -1 : 0;
}
