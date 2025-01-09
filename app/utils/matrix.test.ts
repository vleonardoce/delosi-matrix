import { buildMatrix, fromFlatToMatrix, rotateMatrix } from "./matrix";

test("Test build matrix function", () => {
  const matrix = buildMatrix(2);
  expect(matrix).toStrictEqual([
    [1, 2],
    [3, 4],
  ]);
});

test("Test from flat objet to matrix", () => {
  const matrix = fromFlatToMatrix({
    "0-0": 1,
    "0-1": 2,
    "1-0": 3,
    "1-1": 4,
  });
  expect(matrix).toStrictEqual([
    [1, 2],
    [3, 4],
  ]);
});

test("Test rotate matrix 2 dimension", () => {
  const matrix = rotateMatrix([
    [1, 2],
    [3, 4],
  ]);
  expect(matrix).toStrictEqual([
    [2, 4],
    [1, 3],
  ]);
});

test("Test rotate matrix 3 dimension", () => {
  const matrix = rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
  expect(matrix).toStrictEqual([
    [3, 6, 9],
    [2, 5, 8],
    [1, 4, 7],
  ]);
});
