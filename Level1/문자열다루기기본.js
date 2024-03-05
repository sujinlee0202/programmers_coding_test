const solution = (str) => {
  if (str.length !== 4 && str.length !== 6) return false;
  if (!/^\d+$/.test(str)) return false;
  return true;
};

//
// else return true;

let s1 = "00000o";
let s2 = "3e10";
let s3 = "123456";
let s4 = "a2345678";

console.log(solution(s1));
console.log(solution(s2));
console.log(solution(s3));
console.log(solution(s4));

/*

# 풀이 방법

1. 문자열의 길이가 4, 6이 아닌 경우는 false를 반환한다.
2. 정규식을 통해 문자열이 아닐 경우 false를 반환한다.
   - 정규식 /^\d+$/ : 문자열이 숫자로만 이루어진 경우
3. 위의 경우가 모두 아닐 경우 true를 반환한다.

--

처음에 다음과 같이 코드를 짰었는데 오류가 발생했다.
if (isNaN(str)) return false;
위는 대부분의 경우에서는 맞지만, 지수 형식의 문자열의 경우 오류가 발생했다.
ex) 0x16, 3e10 등 ....
때문에 정규식을 사용하는 방식으로 구현했다.

*/
