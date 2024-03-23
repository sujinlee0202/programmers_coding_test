const solution = (num) => {
  const divNum = num
    .toString()
    .split("")
    .reduce((acc, cur) => Number(acc) + Number(cur));

  if (num % divNum === 0) return true;
  else return false;
};

console.log(solution(10)); // true
console.log(solution(12)); // true
console.log(solution(11)); // false
console.log(solution(13)); // false
console.log(solution(18)); // true
