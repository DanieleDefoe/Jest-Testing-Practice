/* eslint-disable no-undef */
import caesarCipher from './caesarCipher'

test('should return an empty string', () => {
  expect(caesarCipher('', 10)).toBe('')
})

test('expect z to equal a', () => {
  expect(caesarCipher('z', 1)).toBe('a')
})

test('punctuation stays the same', () => {
  expect(caesarCipher('S,W.A,T.', 15)).toEqual('H,L.P,I.')
})

test('should move each letter to 10', () => {
  expect(caesarCipher('dom', 10)).toEqual('nyw')
})

test('should remain uppercase', () => {
  expect(caesarCipher('SWAT', 15)).toBe('HLPI')
})

test('should not change the case', () => {
  expect(caesarCipher('sWaT', 15)).toBe('hLpI')
})

test('all non alphabet symbols should not be mutated', () => {
  expect(caesarCipher('.,.,.,!/$%#^+_-=09)(')).toEqual('.,.,.,!/$%#^+_-=09)(')
})

test('should handle big shift', () => {
  expect(caesarCipher('A', 100)).toBe('W')
})

test('should handle big shift', () => {
  expect(caesarCipher('B', 100)).toBe('X')
})

test('should handle multiple big shift', () => {
  expect(caesarCipher('ABCD', 100)).toBe('WXYZ')
})
