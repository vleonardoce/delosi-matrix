type Matrix = number[][];

export const buildMatrix = (dimension: number) =>
  Array.from({ length: dimension }, (_, i) =>
    Array.from({ length: dimension }, (_, j) => i * dimension + j + 1)
  );

export const fromFlatToMatrix = (form: any) => {
  const matrix: Matrix = [];
  for (const key in form) {
    const [row, col] = key.split("-").map(Number);
    if (!matrix[row]) matrix[row] = [];
    matrix[row][col] = form[key];
  }
  return matrix;
};

export const rotateMatrix = (matrix: Matrix) => {
  const transposed = matrix[0].map((_, i) => matrix.map((row) => row[i]));
  const ratated = transposed.reverse();
  return ratated;
};
