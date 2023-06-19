const solution = (arr) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    while (arr[i] > 1) {
      if (arr[i] % 2 === 0) {
        arr[i] = arr[i] / 2;
      } else {
        arr[i] = (arr[i] - 1) / 2;
      }
      count++;
    }
  }

  return count;
};

const num_list = [12, 4, 15, 1, 14];
console.log(solution(num_list));
