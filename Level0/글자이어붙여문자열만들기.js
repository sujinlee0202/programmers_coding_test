const solution = (str, arr) => {
  let answer = "";

  for (let i = 0; i < arr.length; i++) {
    answer += str[arr[i]];
  }

  return answer;
};

let myString = "cvsgiorszzzmrpaqpe";
const indexList = [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7];

console.log(solution(myString, indexList));
