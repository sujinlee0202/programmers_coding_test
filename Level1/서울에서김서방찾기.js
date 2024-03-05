const solution = (seoul) => {
  const index = seoul.indexOf("Kim");
  return `김서방은 ${index}에 있다`;
};

const seoul = ["Jane", "Kim"];

console.log(solution(seoul));

/*

# 풀이 방법

1. indexOf를 통해 배열 안에서 문자열이 위치한 곳의 index를 찾을 수 있다.

*/
