import { inputs } from "./mullItOverInputs.js";

function sanitizeData() {
  const regex = /mul\(\d+,\s*\d+\)/g;

  const arrayOfStrings = inputs.match(regex);

  return arrayOfStrings;
}

export { sanitizeData };
