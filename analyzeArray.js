const analyzeArray = (array) => {
  if (array.length === 0 || !Array.isArray(array)) {
    return 'Nothing to analyze'
  }
  const { length } = array
  let min = array[0]
  let max = array[0]
  let average = 0
  for (let i = 0; i < length; i += 1) {
    average += array[i]
    if (array[i] > max) {
      max = array[i]
    } else if (array[i] < min) {
      min = array[i]
    }
  }
  average /= length

  return {
    average,
    min,
    max,
    length,
  }
}

export default analyzeArray
