const solution = (str) => {
  str = str.toLowerCase();
  let pCount = 0;
  let yCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "p") {
      pCount++;
    }
    if (str[i] === "y") {
      yCount++;
    }
  }

  return pCount === yCount ? true : false;
};

let string = "pPoooyY";

console.log(solution(string));

/*

# 풀이 방법

1. 대소문자 구분을 하지 않으므로 toLowerCase()를 통해 문자열을 소문자로 변경한다.
2. str의 길이만큼 반복문을 돌면서 p의 개수와 y의 개수를 카운팅한다.
3. p의 개수와 y의 개수가 같으면 true return, 다르면 false return

*/
