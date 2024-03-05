const solution = (str) => {
  const answer_arr = Array.from(str).sort((a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  });

  return answer_arr.join("");
};

const solution2 = (str) => {
  return str.split("").sort().reverse().join("");
};

const string = "Zbcdefg";

console.log(solution(string));
console.log(solution2(string));

/*

# 풀이 방법 1

1. 문자열을 배열로 만든 다음(Array.from)
2. sort의 정렬함수를 구현한다.
3. 내림차순이므로 뒤의 숫자가 더 크다면 1을 반환해 앞으로 오게 하고 작다면 -1을 반환해 뒤로 가게 한다.
4. 내림차순 정렬된 배열을 다시 문자열로 만든다. (join)

# 풀이 방법 2

1. 문자열을 배열로 만들어 정렬한 다음 (split, sort) => 이 떄 오름차순
2. reverse를 통해 뒤집는다 (내림차순이 됨)
3. join을 통해 다시 문자열로 만든다.

*/
