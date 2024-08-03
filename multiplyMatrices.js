exports.multiplyMatrices = (matrixA, matrixB) => {
  let rowsA = matrixA.length,
    colsA = matrixA[0].length;
  let rowsB = matrixB.length,
    colsB = matrixB[0].length;

  if (colsA !== rowsB) {
    throw new Error(
      "Number of columns in matrix A must equal number of rows in matrix B"
    );
  }

  let result = new Array(rowsA);
  for (let i = 0; i < rowsA; i++) {
    result[i] = new Array(colsB).fill(0);
  }

  for (let i = 0; i < rowsA; i++) {
    for (let j = 0; j < colsB; j++) {
      for (let k = 0; k < colsA; k++) {
        result[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }

  return result;
};
