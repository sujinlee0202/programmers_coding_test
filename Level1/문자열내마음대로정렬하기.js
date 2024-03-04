const solution = (arr, n) => {
  return arr.sort((a, b) => {
    if (a[n] < b[n]) return -1;
    if (a[n] > b[n]) return 1;

    if (a < b) return -1;
    if (a > b) return 1;
  });
};

const strings = ["bbce", "abce", "cdx"];
const n = 2;

console.log(solution(strings, n));

/*

# 풀이 방법

1. sort() 를 이용해 배열을 정렬한다.
2. 비교 함수 내에서 a[n]과 b[n]을 비교해 a[n]이 b[n]보다 작으면 -1, 크면 1을 반환한다.
3. -1을 반환하면 앞에 위치, 1을 반환하면 뒤에 위치하게 된다.
4. 문자열이 같을 경우(a[n] === b[n]) 문자열 자체를 비교해 정렬한다. (a < b or b > a)

*/
