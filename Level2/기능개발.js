const solution = (progresses, speeds) => {
  const completeDay = [];
  const answer = [];
  let count = 0;

  for (let i = 0; i < progresses.length; i++) {
    const remainProgress = 100 - progresses[i];
    completeDay.push(Math.ceil(remainProgress / speeds[i]));
  }

  let compare = completeDay[0];

  for (let i = 0; i < completeDay.length; i++) {
    if (compare >= completeDay[i]) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      compare = completeDay[i];
    }
  }

  answer.push(count);
  return answer;
};

const progresses = [93, 30, 55];
const speeds = [1, 30, 5];
console.log(solution(progresses, speeds)); // [2, 1]

const progresses1 = [95, 90, 99, 99, 80, 99];
const speeds1 = [1, 1, 1, 1, 1, 1];
console.log(solution(progresses1, speeds1)); // [1, 3, 2]
