const solution = (str) => {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(true);
    } else {
      if (stack.length !== 0) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
console.log(solution("(()())"));
console.log(solution("(()()))"));
