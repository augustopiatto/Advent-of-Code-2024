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

function getDistance(value1, value2) {
  if (value1 > value2) {
    return value1 - value2;
  } else {
    return value2 - value1;
  }
}

function getTotalDistance() {
  const { firstColumn, secondColumn } = sanitizeData();
  const orderedArray1 = firstColumn.sort();
  const orderedArray2 = secondColumn.sort();

  let totalDistance = 0;

  orderedArray1.forEach((_, index) => {
    totalDistance =
      totalDistance + getDistance(orderedArray1[index], orderedArray2[index]);
  });

  return totalDistance;
}

console.log("Distância total", getTotalDistance());
