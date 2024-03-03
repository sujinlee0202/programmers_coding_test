const solution = (arr, div) => {
  const new_arr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % div === 0) {
      new_arr.push(arr[i]);
    }
  }

  return new_arr.length !== 0 ? new_arr.sort((a, b) => a - b) : [-1];
};

const divisor = 1;
const arr = [2, 36, 1, 3];

console.log(solution(arr, divisor));

/*

# 풀이 방법

1. arr의 요소들을 div로 나눴을 때 나머지가 0인 요소들을 새 배열에 넣는다.
2. 새 배열에 요소가 있으면 오름차순으로 정렬, 없으면 [-1] 배열을 return한다.

*/
