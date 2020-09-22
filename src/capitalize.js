const StringOperations = (() => {
  const capitalize = (str) => {
    const capFirstLetter = str.charAt(0).toUpperCase();
    const strWithoutFirstLetter = str.slice(1);
    const result = capFirstLetter + strWithoutFirstLetter;
    return result;
  };

  return {
    capitalize,
  }
})();

export default StringOperations;