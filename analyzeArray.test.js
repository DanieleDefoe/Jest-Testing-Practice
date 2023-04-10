/* eslint-disable no-undef */
import analyzeArray from './analyzeArray'

test('should return an object', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]) instanceof Object).toBeTruthy()
})

test('should return nothing if array is empty', () => {
  expect(analyzeArray([])).toBe('Nothing to analyze')
})

test('should return nothing if input is not an array', () => {
  expect(analyzeArray(1)).toBe('Nothing to analyze')
  expect(analyzeArray('hello')).toBe('Nothing to analyze')
  expect(analyzeArray({})).toBe('Nothing to analyze')
  expect(analyzeArray(true)).toBe('Nothing to analyze')
  expect(analyzeArray(() => {})).toBe('Nothing to analyze')
})

test('should return an object with 4 entries', () => {
  expect(Object.keys(analyzeArray([1, 8, 3, 4, 2, 6])).length).toEqual(4)
})

test('type of each value should be number', () => {
  expect(Object.values(analyzeArray([1, 8, 3, 4, 2, 6])).every((value) => typeof value === 'number')).toBe(true)
})

test('length property should be > 0', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBeGreaterThan(0)
})

test('min and max properties values must be in array', () => {
  const initArray = [1, 8, 3, 4, 2, 6]
  const result = analyzeArray(initArray)
  expect(initArray.indexOf(result.min) !== -1 && initArray.indexOf(result.max) !== -1).toBe(true)
})

test('check objects for equality', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]))
    .toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    })
})

test('check objects for equality', () => {
  expect(analyzeArray([1, 2, 3, 4, 5]))
    .toEqual({
      average: 3,
      min: 1,
      max: 5,
      length: 5,
    })
})

test('check objects for equality', () => {
  expect(analyzeArray([8, 11, 14, 5, 21, 7]))
    .toEqual({
      average: 11,
      min: 5,
      max: 21,
      length: 6,
    })
})
