const solution = (a, b) => {
  let answer = 0;

  for (i = Math.min(a, b); i <= Math.max(a, b); i++) {
    answer += i;
  }

  return answer;
};

const a = 3;
const b = 3;

console.log(solution(a, b));

/*

# 풀이 방법

1. a, b 값 중 작은 값부터 큰값까지 1씩 증가시킨다. (Math 사용)

*/
