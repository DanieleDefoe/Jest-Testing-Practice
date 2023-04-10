/* eslint-disable no-undef */
import reverseString from './reverseString'

test('empty string', () => {
  expect(reverseString('')).toBe('')
})

test('should return a string', () => {
  expect(typeof reverseString('hello')).toEqual('string')
})

test('should reverse a simple string', () => {
  expect(reverseString('hello')).toBe('olleh')
})

test('should not mutate a palindrome', () => {
  expect(reverseString('madam')).toMatch(/madam/)
})

test('should not change the case of letters', () => {
  expect(reverseString('HeLlO')).toEqual('OlLeH')
})
