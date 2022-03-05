type SortableType = string | boolean | number | bigint;
type SortableProperty<T> = { [P in keyof T]: T[P] extends SortableType ? P : never }[keyof T];
type SortableObject<T> = Pick<T, SortableProperty<T>>;

export enum SortDirection {
  Ascending = 1,
  Descending = -1,
}

export const sortAscending = <T extends SortableType>(items: T[]): T[] => {
  return sort(items, SortDirection.Ascending);
};

export const sortDescending = <T extends SortableType>(items: T[]): T[] => {
  return sort(items, SortDirection.Descending);
};

export const sortAscendingBy = <T extends SortableObject<T>>(property: SortableProperty<T>): ((items: T[]) => T[]) => {
  return sortBy([property, SortDirection.Ascending]);
};

export const sortDescendingBy = <T extends SortableObject<T>>(property: SortableProperty<T>): ((items: T[]) => T[]) => {
  return sortBy([property, SortDirection.Descending]);
};

export const sortByMultiple = <T extends SortableObject<T>>(...props: [SortableProperty<T>, SortDirection][]): ((items: T[]) => T[]) => {
  return sortBy(...props);
};

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

function sortBy<T extends SortableObject<T>>(...propertyDirections: [SortableProperty<T>, SortDirection][]): (items: T[]) => T[] {
  propertyDirections.forEach(([property]) => validateProperty(property));

  return (items: T[]): T[] => {
    validateItems(items);

    return [...items].sort((a, b) => {
      let i = 0;
      let result = 0;
      while (result === 0 && i < propertyDirections.length) {
        const [property, direction] = propertyDirections[i];
        result = direction * compare(a[property], b[property]);
        i++;
      }
      return result;
    });
  };
}

function compare(a: SortableType, b: SortableType): number {
  return typeof a === 'string' && typeof b === 'string' ? a.localeCompare(b) : a > b ? 1 : a < b ? -1 : 0;
}
