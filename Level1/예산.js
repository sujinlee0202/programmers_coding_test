const solution = (arr, budget) => {
  const sort = arr.sort((a, b) => a - b);
  let sum = 0,
    count = 0;
  for (let i = 0; i < sort.length; i++) {
    sum += sort[i];
    if (sum <= budget) {
      count++;
    }
  }
  return count;
};

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));

/*

# 풀이 방법

- 예산에 최대한 많은 부서를 넣으려면 작은 수를 우선적으러 넣어야 하므로 sort를 통해 정렬했다.
- 배열에서 작은 수부터 더해서 합한 수가 예산보다 작을 때 부서 수(count)를 더해주도록 했다.

*/
