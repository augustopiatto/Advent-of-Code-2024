import { inputs } from "./redNosedReportsInputs.js";

function sanitizeData() {
  const arrayOfStrings = inputs.trim().split("\n");
  const reports = arrayOfStrings.map((line) => line.split(" ").map(Number));

  return reports;
}

export { sanitizeData };
