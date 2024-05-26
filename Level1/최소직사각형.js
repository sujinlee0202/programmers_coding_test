const solution = (arr) => {
  const sort = arr.map((wallet) => wallet.sort((a, b) => a - b));
  let maxX = sort[0][0];
  let maxY = sort[0][1];

  for (let i = 1; i < sort.length; i++) {
    maxX = Math.max(maxX, sort[i][0]);
    maxY = Math.max(maxY, sort[i][1]);
  }

  return maxX * maxY;
};

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
); // 4000
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
); // 120
console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
); // 133
console.log(
  solution([
    [20, 10],
    [12, 18],
  ])
); // 240
console.log(
  solution([
    [91, 50],
    [77, 51],
    [50, 1],
    [50, 50],
  ])
); // 4641
