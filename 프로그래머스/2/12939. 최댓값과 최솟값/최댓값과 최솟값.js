const solution = (str) => {
  const arr = str
    .split(" ")
    .map((str) => Number(str))
    .sort((a, b) => a - b);

  return `${arr[0]} ${arr[arr.length - 1]}`;
};