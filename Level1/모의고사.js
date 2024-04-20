const solution = (arr) => {
  const studentA = [1, 2, 3, 4, 5];
  const studentB = [2, 1, 2, 3, 2, 4, 2, 5];
  const studentC = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const strStudentA = studentA.join("").repeat(arr.length);
  const strStudentB = studentB.join("").repeat(arr.length);
  const strStudentC = studentC.join("").repeat(arr.length);

  const answerA = [],
    answerB = [],
    answerC = [];

  const answers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === Number(strStudentA[i])) answerA.push(true);
    if (arr[i] === Number(strStudentB[i])) answerB.push(true);
    if (arr[i] === Number(strStudentC[i])) answerC.push(true);
  }

  answers.push([1, answerA.length]);
  answers.push([2, answerB.length]);
  answers.push([3, answerC.length]);

  const sort = answers.sort((a, b) => b[1] - a[1]);
  const result = [sort[0][0]];

  for (let i = 1; i < sort.length; i++) {
    if (sort[i][1] === sort[0][1]) {
      result.push(sort[i][0]);
    } else {
      break;
    }
  }

  return result;
};

// console.log(solution([1, 2, 3, 4, 5, 3])); // 1
// console.log(solution([3, 3, 3, 3, 2])); // 3
console.log(solution([1, 3, 2, 4, 2])); // 1, 2, 3

/*

# 풀이 방법

1. 문제만큼 학생들의 반복된 찍기 패턴을 구한다. (repeat)
2. 맞은 정답 수를 구하기 위해 문제와 찍은 수를 비교해 정답이면 true를 push한다.
3. 1번 학생, 2번 학생, 3번 학생의 정답 수를 answers 배열에 넣는다.
4. answers 배열을 정렬 해 가장 많이 맞춘 학생을 구한다.
5. 가장 많이 맞춘 학생과 같은 학생이 있을 경우 result 배열에 넣는다.

*/
