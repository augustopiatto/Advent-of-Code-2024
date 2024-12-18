import { inputs } from "./ceresSearchInputs.js";

function sanitizeData() {
  const arrayOfStrings = inputs.trim().split("\n");
  return arrayOfStrings;
}

export { sanitizeData };
