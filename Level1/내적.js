const solution = (a, b) => {
  let answer = 0;

  // for (let i = 0; i < a.length; i++) {
  //   answer += a[i] * b[i];
  // }
  answer = a.reduce((acc, cur, index) => (acc += cur * b[index]));

  return answer;
};

const a = [-1, 0, 1];
const b = [1, 0, -1];

console.log(solution(a, b));
