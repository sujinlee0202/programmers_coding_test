const solution = (num, total) => {
  const answer = [];

  let start = Math.ceil(total / num) - Math.floor(num / 2);
  let end = Math.floor(total / num) + Math.floor(num / 2);

  for (let i = start; i <= end; i++) {
    answer.push(i);
  }

  return answer;
};

let num = 4;
let total = 14;

console.log(solution(num, total));
