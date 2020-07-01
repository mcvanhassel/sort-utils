import { sortAscending, sortDescending } from './sort.utils';

describe('sort utils', () => {
  describe('sort ascending', () => {
    it('is defined', () => {
      expect(sortAscending).toBeDefined();
    });

    it('should throw an error when no input is provided', () => {
      expect(sortAscending).toThrow();
    });
  });

  describe('sort descending', () => {
    it('is defined', () => {
      expect(sortDescending).toBeDefined();
    });
  });
});
