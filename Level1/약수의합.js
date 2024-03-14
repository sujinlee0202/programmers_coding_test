const solution = (n) => {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }

  return answer;
};

let n = 12;
console.log(solution(n));

/*

# 풀이 방법

1. n을 i로 나눴을 때 딱 나누어 떨어지면 약수이므로 해당 수를 더한다.

*/
