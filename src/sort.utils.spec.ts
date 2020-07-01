import { sortAscending, sortDescending } from './sort.utils';

describe('sort utils', () => {
  describe('sort ascending', () => {
    it('is defined', () => {
      expect(sortAscending).toBeDefined();
    });

    it('should throw an error when argument "items" is not provided', () => {
      expect(sortAscending).toThrow();
    });

    it('should throw an error when argument "items" is not an array', () => {
      expect(() => sortAscending(123 as any)).toThrow('Argument "items" should be provided as an array');
    });

    it('should not throw an error when argument "items" is an array', () => {
      expect(() => sortAscending([1, 2, 3])).not.toThrow();
    });

    it('should return an array', () => {
      const result = sortAscending([]);

      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('sort descending', () => {
    it('is defined', () => {
      expect(sortDescending).toBeDefined();
    });
  });
});
