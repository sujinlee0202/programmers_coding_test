const solution = (score) => {
  const answer = [];
  const prevAvg = [];
  const avg = [];
  const rankArr = [];

  let rank = 1;
  let sameCount = 0;

  for (let i = 0; i < score.length; i++) {
    prevAvg.push((score[i][0] + score[i][1]) / 2);
    avg.push((score[i][0] + score[i][1]) / 2);
  }

  avg.sort((a, b) => b - a);

  for (let i = 0; i < avg.length; i++) {
    if (avg[i] === avg[i + 1]) {
      rankArr.push([avg[i], rank]);
      sameCount++;
    } else {
      rankArr.push([avg[i], rank]);
      rank = rank + sameCount + 1;
      sameCount = 0;
    }
  }

  for (let i = 0; i < prevAvg.length; i++) {
    for (let j = 0; j < rankArr.length; j++) {
      if (prevAvg[i] === rankArr[j][0]) {
        answer.push(rankArr[j][1]);
        break;
      }
    }
  }

  return answer;
};

const solution2 = (score) => {
  const avg = score.map((score) => (score[0] + score[1]) / 2);
  const sorted = avg.slice().sort((a, b) => b - a);
  return avg.map((score) => sorted.indexOf(score) + 1);
};

const score = [
  [80, 70],
  [80, 70],
  [80, 70],
  [70, 80],
  [30, 50],
  [90, 100],
  [90, 100],
  [100, 90],
  [100, 100],
  [10, 30],
];

console.log(solution(score));
console.log(solution2(score));
