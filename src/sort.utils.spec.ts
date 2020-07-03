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

    it('should sort string items', () => {
      const items = ['c', 'a', 'b'];
      const result = sortAscending(items);

      expect(result).toEqual(['a', 'b', 'c']);
    });

    it('should sort number items', () => {
      const items = [3, 10, 2, 1];
      const result = sortAscending(items);

      expect(result).toEqual([1, 2, 3, 10]);
    });

    it('should sort bigint items', () => {
      const items = [BigInt('90071992547409990'), BigInt('1007199254740999'), BigInt('9007199254740999')];
      const result = sortAscending(items);

      expect(result).toEqual([BigInt('1007199254740999'), BigInt('9007199254740999'), BigInt('90071992547409990')]);
    });

    it('should sort boolean items', () => {
      const items = [true, false, false, true, false];
      const result = sortAscending(items);

      expect(result).toEqual([false, false, false, true, true]);
    });

    it('should sort string items with special characters', () => {
      const items = ['ä', 'é', 'e', 'è', 'b', 'ü', 'a', 'u'];
      const result = sortAscending(items);

      expect(result).toEqual(['a', 'ä', 'b', 'e', 'é', 'è', 'u', 'ü']);
    });

    it('should not mutate input argument "items"', () => {
      const items = ['c', 'a', 'b'];
      sortAscending(items);

      expect(items).toEqual(['c', 'a', 'b']);
    });
  });

  describe('sort descending', () => {
    it('is defined', () => {
      expect(sortDescending).toBeDefined();
    });

    it('should throw an error when argument "items" is not provided', () => {
      expect(sortDescending).toThrow();
    });

    it('should throw an error when argument "items" is not an array', () => {
      expect(() => sortDescending(123 as any)).toThrow('Argument "items" should be provided as an array');
    });

    it('should not throw an error when argument "items" is an array', () => {
      expect(() => sortDescending([1, 2, 3])).not.toThrow();
    });

    it('should return an array', () => {
      const result = sortDescending([]);

      expect(result).toBeInstanceOf(Array);
    });

    it('should sort string items', () => {
      const items = ['c', 'a', 'b'];
      const result = sortDescending(items);

      expect(result).toEqual(['c', 'b', 'a']);
    });

    it('should sort number items', () => {
      const items = [3, 10, 2, 1];
      const result = sortDescending(items);

      expect(result).toEqual([10, 3, 2, 1]);
    });

    it('should sort bigint items', () => {
      const items = [BigInt('90071992547409990'), BigInt('1007199254740999'), BigInt('9007199254740999')];
      const result = sortDescending(items);

      expect(result).toEqual([BigInt('90071992547409990'), BigInt('9007199254740999'), BigInt('1007199254740999')]);
    });

    it('should sort boolean items', () => {
      const items = [true, false, false, true, false];
      const result = sortDescending(items);

      expect(result).toEqual([true, true, false, false, false]);
    });

    it('should sort string items with special characters', () => {
      const items = ['ä', 'é', 'e', 'è', 'b', 'ü', 'a', 'u'];
      const result = sortDescending(items);

      expect(result).toEqual(['ü', 'u', 'è', 'é', 'e', 'b', 'ä', 'a']);
    });

    it('should not mutate input argument "items"', () => {
      const items = ['c', 'a', 'b'];
      sortDescending(items);

      expect(items).toEqual(['c', 'a', 'b']);
    });
  });
});
