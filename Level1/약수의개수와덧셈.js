const solution = (left, right) => {
  const arr = [];
  const countYaksu = [];
  let count = 0;
  let sum = 0;

  for (let i = left; i <= right; i++) {
    arr.push(i);
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j <= arr[i]; j++) {
      if (arr[i] % j === 0) {
        count++;
      }
    }
    countYaksu.push(count);
    count = 0;
  }

  for (let i = 0; i < countYaksu.length; i++) {
    if (countYaksu[i] % 2 === 0) {
      sum += arr[i];
    } else {
      sum -= arr[i];
    }
  }

  return sum;
};

// 제곱근이 정수면 약수의 개수가 홀수이다.
const solution2 = (left, right) => {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) answer -= i;
    else answer += i;
  }

  return answer;
};

console.log(solution(13, 17));
console.log(solution(24, 27));

console.log(solution2(13, 17));
console.log(solution2(24, 27));
