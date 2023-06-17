const solution = (width, height) => width - 1 + (height - 1) * width;
// 다른 풀이 : width * height - 1

let width = 2;
let height = 5;

console.log(solution(width, height));
