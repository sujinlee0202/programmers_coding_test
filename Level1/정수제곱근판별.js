const solution = (num) => {
  const sqrt = Math.sqrt(num);

  if (num % sqrt === 0) {
    return (sqrt + 1) ** 2; // Math.pow(sqrt + 1, 2)
  } else {
    return -1;
  }
};

console.log(solution(121));
console.log(solution(3));

/*

# 풀이 방법

1. 제곱근을 구한다.
2. 제곱근이 있는 수라면 두 값을 나눴을 때 나머지가 없을 것이므로
3. 나머지가 있다면 제곱근이 없으므로 -1, 있으면 x+1의 제곱을 구한다.

*/
