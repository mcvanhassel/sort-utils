type SortableType = string | boolean | number | bigint;
type SortableProperty<T> = { [P in keyof T]: T[P] extends SortableType ? P : never }[keyof T];

enum SortDirection {
  Ascending = 1,
  Descending = -1,
}

export const sortAscending = <T extends SortableType>(items: T[]): T[] => {
  return sort(items, SortDirection.Ascending);
};

export const sortDescending = <T extends SortableType>(items: T[]): T[] => {
  return sort(items, SortDirection.Descending);
};

export function sortAscendingBy<T>(items: T[], property: SortableProperty<T>) {
  validateItems(items);
  validateProperty(property);

  return [];
}

export function sortDescendingBy<T>(items: T[], property: SortableProperty<T>) {
  validateItems(items);
  validateProperty(property);

  return [];
}

function validateItems<T>(items: T[]): void {
  if (items === null || items === undefined || !Array.isArray(items)) {
    throw new Error('Argument "items" should be provided as an array');
  }
}

function validateProperty<T>(property: SortableProperty<T>): void {
  if (property === null || property === undefined || property.toString().trim() === '') {
    throw new Error('Argument "property" should be provided');
  }
}

function sort<T extends SortableType>(items: T[], direction: SortDirection): T[] {
  validateItems(items);

  return [...items].sort((a, b) => direction * compare(a, b));
}

function compare(a: SortableType, b: SortableType): number {
  return typeof a === 'string' && typeof b === 'string' ? a.localeCompare(b) : a > b ? 1 : a < b ? -1 : 0;
}
