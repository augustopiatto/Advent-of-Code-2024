import { sanitizeData } from "./sanitizeDataPartTwo.js";

function getMultiplicationsAddition(data) {
  const commands = sanitizeData(data);
  let enabled = true;

  const sum = commands.reduce((acc, command) => {
    if (command === "do()") {
      enabled = true;
    } else if (command === "don't()") {
      enabled = false;
    }

    if (!enabled) return acc;

    const stringNums = command.match(/\d+/g);
    if (stringNums) {
      const nums = stringNums.map(Number);
      acc += nums[0] * nums[1];
    }

    return acc;
  }, 0);

  return sum;
}

console.log("Somatória das multiplicações", getMultiplicationsAddition());
