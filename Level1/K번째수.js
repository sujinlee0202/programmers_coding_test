const solution = (arr, commands) => {
  const result = [];

  for (let i = 0; i < commands.length; i++) {
    const sort = arr
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a, b) => a - b);
    const selected = sort[commands[i][2] - 1];
    result.push(selected);
  }

  return result;
};

const arr = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];
console.log(solution(arr, commands)); // [5, 6, 3]
