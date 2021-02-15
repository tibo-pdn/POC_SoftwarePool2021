import { describe, it, expect } from '@jest/globals';
import { superComputer } from '../src/superComputer';

describe('Test sum function', () => {
  it('Simply 1 + 1', () => {
    superComputer(5, '+', 5, (err:Error | null, res:number | null) : Error | number => {
      expect(res).toBe(10);
      return res;
    });
  });
});

describe('Test sub function', () => {
  it('Simply 1 - 1', () => {
    superComputer(1, '-', 1, (err:Error | null, res:number | null) : Error | number => {
      expect(res).toBe(0);
      return res;
    });
  });
});

describe('Test mul function', () => {
  it('Simply 2 * 3', () => {
    superComputer(2, '*', 3, (err:Error | null, res:number | null) : Error | number => {
      expect(res).toBe(6);
      return res;
    });
  });
});

describe('Test div function', () => {
  it('Simply 15 / 3', () => {
    superComputer(15, '/', 3, (err:Error | null, res:number | null) : Error | number => {
      expect(res).toBe(5);
      return res;
    });
  });
});

describe('Test mod function', () => {
  it('Simply 16 % 5', () => {
    superComputer(16, '%', 5, (err:Error | null, res:number | null) : Error | number => {
      expect(res).toBe(1);
      return res;
    });
  });
});
