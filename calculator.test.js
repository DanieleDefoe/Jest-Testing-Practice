/* eslint-disable no-undef */
import calculator from './calculator'

const {
  add,
  subtract,
  multiply,
  divide,
} = calculator

test('1 + 2 to be 3', () => {
  expect(add(1, 2)).toBe(3)
})

test('should return a number', () => {
  expect(typeof add(0, 0)).toEqual('number')
})

test('3 - 1 to be 2', () => {
  expect(subtract(3, 1)).toBe(2)
})

test('4 * 2 to be 8', () => {
  expect(multiply(4, 2)).toBe(8)
})

test('6 / 2 to be 3', () => {
  expect(divide(6, 2)).toEqual(3)
})

test('should not divide by ZERO', () => {
  expect(() => divide(5, 0)).toThrow()
})
