const solution = (n) => {
  let ternary = n.toString(3);
  let reverse = ternary.split("").reverse().join("");
  let decimal = parseInt(reverse, 3);

  return decimal;
};

console.log(solution(45));
console.log(solution(125));

/*

# 진수 변환

- 10진수 -> N진수 : decimal.toString(N)
- N진수 -> 10진수 : parseInt(number, N)
- N진수 -> M진수 : parseInt(number, N).toString(M)

*/
