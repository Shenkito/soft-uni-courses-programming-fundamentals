
function countEqualNeighborPairs(input) {
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (i + 1 < input.length && input[i][j] === input[i + 1][j]) {
        count++;
      }
      if (j + 1 < input[i].length && input[i][j] === input[i][j + 1]) {
        count++;
      }
    }
  }

  console.log(count);
}

countEqualNeighborPairs([
['test', 'yo', 'yo', 'ho'],
['well', 'done', 'no', '6'],
['not', 'done', 'yet', '5']]);