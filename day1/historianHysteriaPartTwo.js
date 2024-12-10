import { sanitizeData } from "./sanitizeData.js";

function getSimilarityScore() {
  const { firstColumn, secondColumn } = sanitizeData();

  const appearances = {};
  let similarities = 0;

  firstColumn.forEach((value1) => {
    if (!Object.keys(appearances).includes(String(value1))) {
      appearances[value1] = 0;

      secondColumn.forEach((value2) => {
        if (value1 === value2) {
          appearances[value1] += 1;
        }
      });
    }

    similarities += value1 * appearances[value1];
  });

  return similarities;
}

console.log("Similaridade", getSimilarityScore());
