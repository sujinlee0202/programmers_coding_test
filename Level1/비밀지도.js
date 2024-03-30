const solution = (n, arr1, arr2) => {
  let binary1 = 0,
    binary2 = 0;
  const binaryArr1 = [];
  const binaryArr2 = [];
  const map = [];

  for (let i = 0; i < n; i++) {
    binary1 = arr1[i].toString(2);
    binary2 = arr2[i].toString(2);

    binaryArr1.push("0".repeat(n - binary1.length) + binary1);
    binaryArr2.push("0".repeat(n - binary2.length) + binary2);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (binaryArr1[i][j] === "1" || binaryArr2[i][j] === "1") {
        map.push("#");
      } else {
        map.push(" ");
      }
    }
  }

  const newMap = [];

  for (let i = 0; i < map.length; i += n) {
    newMap.push(map.slice(i, i + n).join(""));
  }

  return newMap;
};

const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];

console.log(solution(n, arr1, arr2));

/*

# 풀이 방법

- arr1, arr2의 숫자들을 자릿수를 맞추어 2진수로 변환한다.
- 2진수로 변환된 배열의 각 요소를 비교해 둘중 하나라도 1이면 #, 아니면 빈칸을 새 배열 map에 넣는다.
- map 배열을 5개씩 나누어 문자열로 만들어준다.

*/
