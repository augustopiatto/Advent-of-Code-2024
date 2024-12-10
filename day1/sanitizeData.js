import { inputs } from "./historianHysteriaInputs.js";

function sanitizeData() {
  const withoutLineBreak = inputs.trim().split("\n");

  const firstColumn = [];
  const secondColumn = [];

  withoutLineBreak.forEach((line) => {
    const [first, second] = line.trim().split(/\s+/);

    firstColumn.push(parseInt(first, 10));
    secondColumn.push(parseInt(second, 10));
  });

  return { firstColumn, secondColumn };
}

export { sanitizeData };
