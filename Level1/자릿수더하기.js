const solution = (num) => {
  return num
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
};

console.log(solution(123)); // 6
console.log(solution(987)); // 24

/*

# 풀이 방법

1. num을 문자열로 바꾸고 다시 배열로 변환한다. (toString, split)
2. reduce를 통해 배열의 각 값을 더한다. 여기서 문자열을 다시 숫자로 변환해 더해야한다.

*/
