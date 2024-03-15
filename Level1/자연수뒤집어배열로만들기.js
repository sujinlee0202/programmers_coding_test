const solution = (num) => {
  return num
    .toString()
    .split("")
    .reverse()
    .map((str) => Number(str));
};

console.log(solution(1234567890));
console.log(solution(100000));

/*

# 풀이 방법

1. 숫자를 문자열로 바꾸고 배열로 만들어 뒤집는다 (toString, split, reverse)
2. map을 이용해 문자열을 숫자로 바꾼 배열을 만들고 반환한다.

*/
