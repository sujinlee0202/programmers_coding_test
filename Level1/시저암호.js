const solution = (str, n) => {
  const arr = Array.from(str);
  let answer = "";

  for (let i = 0; i < arr.length; i++) {
    const code = arr[i].charCodeAt(0);

    if (code === 32) {
      answer += String.fromCharCode(code);
    } else if (code >= 65 && code <= 90) {
      const newCode = ((code - 65 + n) % 26) + 65;
      answer += String.fromCharCode(newCode);
    } else if (code >= 97 && code <= 122) {
      const newCode = ((code - 97 + n) % 26) + 97;
      answer += String.fromCharCode(newCode);
    }
  }

  return answer;
};

console.log(solution("AB", 1)); // "BC"
console.log(solution("z", 1)); // "a"
console.log(solution("Z", 1)); // "A"
console.log(solution("a B z ZZ", 4)); // "e F d"
console.log(solution("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 25)); // "ZABCDEFGHIJKLMNOPQRSTUVWXY"

/*

# issue
- z가 a로 넘어갈 때만 계산하고 n의 숫자가 커져서 다른 문자열이 한바퀴 돌 때는 계산하지 못했다.
- 따라서 대문자, 소문자를 나누어서 한바퀴 돌았을 때를 따로 계산해 진행했다.

*/
