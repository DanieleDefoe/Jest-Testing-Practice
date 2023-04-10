const calculator = {
  add(x, y) {
    return x + y
  },

  subtract(x, y) {
    return x - y
  },

  multiply(x, y) {
    return x * y
  },

  divide(x, y) {
    if (y === 0) {
      throw new Error('can not divide by zero')
    } else {
      return x / y
    }
  },
}

export default calculator
