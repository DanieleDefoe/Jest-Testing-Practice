const isUpperCase = (letter) => letter === letter.toUpperCase()

const isLetter = (letter) => /[a-z]/i.test(letter)

const shiftLetter = (charCode, startCode, endCode, shiftRatio) => {
  let sum = charCode + shiftRatio
  while (sum > endCode) {
    sum -= endCode
    sum += startCode - 1
  }
  return String.fromCharCode(sum)
}

// uppercase (65 to 90), lowercase (97, 122)

const caesarCipher = (str, shift) => {
  if (str.length === 0) return ''
  if (shift === 0) return str
  let result = ''
  for (let i = 0; i < str.length; i += 1) {
    let currentLetter = str[i]
    if (isLetter(currentLetter)) {
      const code = currentLetter.charCodeAt()
      if (isUpperCase(currentLetter)) {
        currentLetter = shiftLetter(code, 65, 90, shift)
      } else {
        currentLetter = shiftLetter(code, 97, 122, shift)
      }
    }
    result = `${result}${currentLetter}`
  }
  return result
}

export default caesarCipher
