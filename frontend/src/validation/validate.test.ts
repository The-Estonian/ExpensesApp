import { describe, it, expect } from 'vitest';
import { validateName } from './validate';

describe('validateName', () => {
  it('returns true for non-empty strings', () => {
    expect(validateName('Alice')).toBe(true);
    expect(validateName('Bob')).toBe(true);
  });

  it('returns false for empty string', () => {
    expect(validateName('')).toBe(false);
  });
});
