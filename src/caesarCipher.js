const CaesarCipher = (() => {
  const getAsciiCode = (str) => {
    const asciiCode = [];
    for (let i = 0; i < str.length; i += 1) {
      asciiCode[i] = str.charCodeAt(i);
    }
    return asciiCode;
  };

  const convertToString = (asciiVals) => {
    const chars = [];
    for (let i = 0; i < asciiVals.length; i += 1) {
      chars[i] = String.fromCharCode(asciiVals[i]);
    }
    return chars;
  };

  const encrypt = (msg, key) => {
    let encryptedStr = '';
    const asciiVals = getAsciiCode(msg);
    for (let i = 0; i < msg.length; i += 1) {
      let dif = 0;
      if (asciiVals[i] >= 97 || asciiVals <= 122) {
        if ((asciiVals[i] + key) > 122) {
          dif = asciiVals[i] + key - 122;
          asciiVals[i] = 96 + dif;
        } else if (asciiVals[i] !== 33) {
          asciiVals[i] += key;
        }
      } else if (asciiVals[i] >= 65 || asciiVals <= 90) {
        if ((asciiVals[i] + key) > 90) {
          dif = asciiVals[i] + key - 90;
          asciiVals[i] = 64 + dif;
        } else {
          asciiVals[i] += key;
        }
      }
    }
    encryptedStr = convertToString(asciiVals);
    return encryptedStr.join('');
  };

  return {
    encrypt,
  };
})();

export default CaesarCipher;