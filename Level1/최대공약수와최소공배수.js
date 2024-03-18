const solution = (n, m) => {
  let maxDiv = 0;

  for (let i = 1; i <= Math.min(n, m); i++) {
    if (Math.min(n, m) % i === 0 && Math.max(n, m) % i === 0) {
      maxDiv = i;
    }
  }

  return [maxDiv, (n * m) / maxDiv];
};

console.log(solution(3, 12));
console.log(solution(12, 18));
console.log(solution(5, 2));

/*

# 풀이 방법

1. 최소공배수 : 두 수 사이의 배수 중 가장 작은 값, "두 수의 곱을 최대공약수로 나눈 값"
2. 최대공약수 : 두 수 사이의 약수 중 가장 큰 값
   => 두 수 중 작은 값의 약수에서 나온다.
3. 두 수 중 작은값을 1씩 올리면서 반복해 동시에 나눠지는 값이 있다면 maxDiv에 넣는다.

*/
