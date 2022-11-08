function stringLength(string) {
  if ((string.length > 0) && (string.length <= 10)) {
    return string.length;
  }
  throw new Error('Check fail: invalid string length');
}

module.exports = stringLength;