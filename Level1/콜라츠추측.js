const solution = (n) => {
  let count = 0;
  if (n === 1) return 0;

  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = n * 3 + 1;
    }
    count++;
  }

  if (count >= 500) return -1;

  return count;
};

console.log(solution(6)); // 8
console.log(solution(1)); // 0
console.log(solution(16)); // 4
console.log(solution(626331)); // -1
