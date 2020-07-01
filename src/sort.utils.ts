export function sortAscending<T>(items: T[]) {
  if (items === null || items === undefined || !Array.isArray(items)) {
    throw new Error('Argument "items" should be provided as an array');
  }
}

export function sortDescending() {}
