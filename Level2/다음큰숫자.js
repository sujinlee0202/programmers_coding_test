const solution = (n) => {
  let binary = n.toString(2);
  let count = binary.replaceAll(0, "").split("").length;

  let newBinary;
  let newCount;

  while (true) {
    n = n + 1;
    newBinary = n.toString(2);
    newCount = newBinary.replaceAll(0, "").split("").length;

    if (count === newCount) {
      return parseInt(newBinary, 2);
    }
  }
};

console.log(solution(78));
console.log(solution(15));
