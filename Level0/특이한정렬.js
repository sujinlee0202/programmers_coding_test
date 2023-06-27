const solution = (num_list, n) => {
  const answer = [];

  const arr = num_list.map((num) => [num, Math.abs(num - n)]);
  const sortArr = arr.sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < sortArr.length - 1; i++) {
    if (sortArr[i][1] === sortArr[i + 1][1]) {
      let temp = [];
      if (sortArr[i][0] < sortArr[i + 1][0]) {
        temp = sortArr[i];
        sortArr[i] = sortArr[i + 1];
        sortArr[i + 1] = temp;
      }
    }
    answer.push(sortArr[i][0]);
  }

  answer.push(sortArr[sortArr.length - 1][0]);

  return answer;
};

const num_list = [10000, 20, 36, 47, 40, 6, 10, 7000];
let n = 30;

console.log(solution(num_list, n));
