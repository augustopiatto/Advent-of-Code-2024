import { sanitizeData } from "./sanitizeDataPartOne.js";

function getMultiplicationsAddition(data) {
  const multiplications = sanitizeData(data);

  const sum = multiplications.reduce((acc, multiplication) => {
    const stringNums = multiplication.match(/\d+/g);
    const nums = stringNums.map(Number);
    acc += nums[0] * nums[1];

    return acc;
  }, 0);

  return sum;
}

console.log("Somatória das multiplicações", getMultiplicationsAddition());
