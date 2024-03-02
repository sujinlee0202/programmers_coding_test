const solution = (s) => {
  if (s.length % 2 === 0) {
    return s[s.length / 2 - 1] + s[s.length / 2];
  } else {
    return s[Math.floor(s.length / 2)];
  }
};

const s = "abcde";

console.log(solution(s));

/*

# 풀이방법

1. s가 홀수인지 짝수인지 판별
2. 짝수일 경우 2로 나눈값으로 인덱스를 구한 후 중간값 2개 출력
3. 홀수일 경우 2로 나눈값으로 인덱스를 구한 후 중간값 1개 출력

*/
