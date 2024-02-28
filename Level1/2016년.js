const solution = (a, b) => {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const date = new Date(`2016-${a}-${b}`);
  const today = date.getDay();

  return days[today];
};

const a = 5;
const b = 24;

console.log(solution(a, b));

/*

# 풀이방법

1. Date 객체를 사용해 해당 날짜의 요일 index를 찾는다.
2. 요일 배열에서 찾은 index의 요일 반환

*/
