const solution = (bin1, bin2) => {
  let sum = parseInt(bin1, 2) + parseInt(bin2, 2);

  return sum.toString(2);
};

let bin1 = "1001";
let bin2 = "1111";

console.log(solution(bin1, bin2));
