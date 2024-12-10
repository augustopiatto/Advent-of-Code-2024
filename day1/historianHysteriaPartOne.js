import { sanitizeData } from "./sanitizeData.js";

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
