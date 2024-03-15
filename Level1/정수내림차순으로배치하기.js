const solution = (num) => {
  const sort = num
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");

  return Number(sort);
};

console.log(solution(118372));
console.log(solution(10000000));

/*

# 풀이 방법

1. 숫자를 문자로 만든 뒤 배열을 만들어서 내림차순 정렬한다. (toString, split, sort)
2. 내림차순 정렬한 배열을 다시 문자열로 만든다 (join)
3. 만든 문자열을 다시 숫자로 만들고 return한다.

*/
