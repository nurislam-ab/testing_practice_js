const StringOperations = (() => {
  const capitalize = (str) => {
    const capFirstLetter = str.charAt(0).toUpperCase();
    const strWithoutFirstLetter = str.slice(1);
    const result = capFirstLetter + strWithoutFirstLetter;
    return result;
  };

  const reverseString = (str) => {
    const splitStr = str.split('');
    const reveresedStr = splitStr.reverse();
    const result = reveresedStr.join('');
    return result;
  };

  return {
    capitalize,
    reverseString
  }
})();

export default StringOperations;