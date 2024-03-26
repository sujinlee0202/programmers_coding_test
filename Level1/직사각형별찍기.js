const solution = (n, m) => {
  const arr = [];

  for (let i = 0; i < n; i++) {
    arr.push("*");
  }
  for (let j = 0; j < m; j++) {
    console.log(arr.join(""));
  }
};

console.log(solution(5, 3));

/*

# 풀이 방법

1. 배열에 숫자 n 만큼 '*'을 추가한다. => ['*', '*', '*', '*', '*']
2. 숫자 m 만큼 배열을 출력한다
*****
*****
*****

*/
