const solution = (abs, sign) => {
  let sum = 0;

  for (let i = 0; i < sign.length; i++) {
    if (sign[i]) {
      sum += abs[i];
    } else {
      sum -= abs[i];
    }
  }

  return sum;
};

const solution2 = (abs, sign) => {
  return abs.reduce((acc, cur, i) => acc + cur * (sign[i] ? 1 : -1), 0);
};

console.log(solution([4, 7, 12], [true, false, true]));
console.log(solution([1, 2, 3], [false, false, true]));
