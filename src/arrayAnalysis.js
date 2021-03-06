const ArrayAnalysis = (() => {
  const average = (arr) => {
    let sum = 0;

    arr.forEach((n) => {
      sum += n;
    });

    const average = sum / arr.length;
    return average;
  };

  const arrLength = (arr) => arr.length;

  const arrMaxVal = (arr) => Math.max(...arr);

  const arrMinVal = (arr) => Math.min(...arr);

  const arrAnalysis = (arr) => {
    const obj = {
      arrAverage: average(arr),
      arrLength: arrLength(arr),
      arrMax: arrMaxVal(arr),
      arrMin: arrMinVal(arr),
    };
    return obj;
  };

  return {
    arrAnalysis,
  };
})();

export default ArrayAnalysis;