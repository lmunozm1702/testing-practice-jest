function reverseString(inputStr) {
  if (inputStr.length > 0) {
    return (inputStr.split('').reverse().join(''));
  }
  throw new Error('Check fail: void string');
}

module.exports = reverseString;