const solution = (arr1, arr2) => {
  const answer = [];
  const lengthArr = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      answer.push(arr1[i][j] + arr2[i][j]);
    }
    lengthArr.push(arr1[i].length);
  }

  for (let i = 0; i < answer.length; i++) {
    answer.push(answer.splice(0, lengthArr[i]));
  }

  return answer;
};

const arr1 = [[1, 2, 0], [2, 3], [5], [1, 2], [2, 3], [5, 6]];
const arr2 = [[3, 4, 5], [5, 6], [10], [3, 4], [5, 6], [10, 11]];

console.log(solution(arr1, arr2));
