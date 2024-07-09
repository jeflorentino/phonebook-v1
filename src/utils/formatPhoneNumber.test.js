import { formatPhoneNumber } from './formatPhoneNumber';

describe('formatPhoneNumber', () => {
  it('should format Brazilian mobile numbers correctly', () => {
    expect(formatPhoneNumber('5511987654321')).toBe('+55 (11) 98765-4321');
  });

  it('should format Brazilian fixed numbers correctly', () => {
    expect(formatPhoneNumber('551132165432')).toBe('+55 (11) 3216-5432');
  });

  it('should format American numbers correctly', () => {
    expect(formatPhoneNumber('11234567890')).toBe('+1 (123) 456-7890');
  });

  it('should throw an error for invalid Brazilian mobile numbers', () => {
    expect(() => formatPhoneNumber('551198765432')).toThrow('Número inválido');
  });

  it('should throw an error for invalid Brazilian fixed numbers', () => {
    expect(() => formatPhoneNumber('55113216543')).toThrow('Número inválido');
  });

  it('should throw an error for invalid American numbers', () => {
    expect(() => formatPhoneNumber('1123456789')).toThrow('Número inválido');
  });

  it('should throw an error for completely invalid numbers', () => {
    expect(() => formatPhoneNumber('123456')).toThrow('Número inválido');
  });
});