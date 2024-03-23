const solution = (x, n) => {
  const arr = [];
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum = sum + x;
    arr.push(sum);
  }

  return arr;
};

console.log(solution(2, 5)); // [2, 4, 6, 8, 10]
console.log(solution(4, 3)); // [4, 8, 12]
console.log(solution(-4, 2)); // [-4, -8]
