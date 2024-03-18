const solution = (arr) => {
  if (arr.length === 1) return [-1];

  // const sortArr = [...arr].sort((a, b) => a - b);
  // const min = sortArr[0];

  const min = Math.min(...arr);

  return arr.filter((num) => num !== min);
};

console.log(solution([4, 3, 2, 1]));
console.log(solution([5, 1, 2, 3, 4]));
console.log(solution([5, 1, 1, 2, 3, 4]));
console.log(solution([10]));

/*

# 풀이 방법

1. 원본 배열을 정렬해 배열을 만든다. (sortArr)
2. 가장 작은 수를 찾는다. (srotArr[0])
  => 가장 작은 수를 찾을 경우 처음에 sort를 사용했지만 Math.min(...arr)을 사용하면 더 쉽게 찾을 수 있었다.
3. filter을 사용해 원본 배열에서 조건에 맞는 요소 출력
   - arr요소 중 min과 같다 => 제거해야 하는 요소 => 다를 경우만 출력

*/
