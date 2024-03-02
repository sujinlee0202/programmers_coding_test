const solution = (arr) => {
  const new_arr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      new_arr.push(arr[i]);
    }
  }

  return new_arr;
};

const arr = [4, 4, 4, 3, 3];
console.log(solution(arr));

/*

# 풀이 방법

1. 현재 요소와 다음 요소를 비교해 다를 경우에만 새 배열에 push
2. 위의 코드를 for를 이용해 배열의 길이만큼 반복

*/
