import { sanitizeData } from "./sanitizeData.js";

function searchXmasWord() {}

function getXmasCount(data) {
  const inputsMatrix = sanitizeData(data);

  let sum = 0;

  for (let i = 0; i < inputsMatrix.length; i += 1) {
    for (let j = 0; j < inputsMatrix[i].length; j += 1) {
      if (inputsMatrix[i][j] === "X") {
        const xmasCounted = searchXmasWord(inputsMatrix, i, j);
        sum += xmasCounted;
      } else {
        continue;
      }
    }
  }
}

console.log("A palavra XMAS apareceu ", getXmasCount(), " vezes");
