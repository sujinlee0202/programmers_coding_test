const solution = (prices) => {
  let count = 0;
  const answer = [];

  for (let i = 0; i < prices.length; i++) {
    count = 0;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] <= prices[j]) {
        count++;
      } else {
        count += 1;
        break;
      }
    }
    answer.push(count);
  }

  return answer;
};

console.log(solution([1, 2, 3, 2, 3])); // [4, 3, 1, 1, 0]
console.log(solution([1, 3, 5, 7, 9, 4, 5, 2, 1, 0])); // [9, 6, 3, 2, 1, 2, 1, 1, 1, 0]
