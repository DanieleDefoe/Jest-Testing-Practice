/* eslint-disable no-undef */
import capitalize from './capitalize';

test('should return empty string', () => {
  expect(capitalize('')).toBe('')
})

test('should return a string', () => {
  expect(typeof capitalize('hello')).toBe('string')
})

test('basic string', () => {
  expect(capitalize('hello')).toBe('Hello')
})

test('capitalized string', () => {
  expect(capitalize('World')).toBe('World')
})

test('uppercased string', () => {
  expect(capitalize('HELLO')).toBe('HELLO')
})

test('other letters should not be touched', () => {
  expect(capitalize('fhALrTEs')).toBe('FhALrTEs')
})
