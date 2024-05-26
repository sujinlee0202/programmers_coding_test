const solution = (numbers) => {
  let sum = 0;
  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) {
      sum += i;
    }
  }
  return sum;
};

console.log(solution([5, 8, 4, 0, 6, 7, 9]));
