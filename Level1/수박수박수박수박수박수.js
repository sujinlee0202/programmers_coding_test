const solution = (n) => {
  let answer = "";

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      answer += "수";
    } else {
      answer += "박";
    }
  }

  return answer;
};

const solution2 = (n) => {
  return "수박".repeat(n).slice(0, n);
};

const n = 3;
console.log(solution(n));
console.log(solution2(n));

/*

#1. 풀이 방법

1. index가 짝수인 경우 "수"를 홀수인 경우 "박"을 더하면서 n만큼 반복한다.

#2. 풀이 방법

1. repeat를 사용해 문자열을 n만큼 반복한다.
2. slice를 사용해 index 0에서 n만큼만 반환한다.

*/
