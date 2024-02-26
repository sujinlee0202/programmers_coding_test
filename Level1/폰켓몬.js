const solution = (nums) => {
  const maxNum = nums.length / 2;
  const setNums = Array.from(new Set(nums));
  let answer;

  if (maxNum > setNums.length) {
    answer = setNums.length;
  } else {
    answer = maxNum;
  }

  return answer;
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(solution(nums));

/*

# 풀이방법

1. 배열 nums에서 최대로 가질 수 있는 종류의 개수를 구한다. (maxNum)
2. Set함수를 이용해 배열에서 중복을 제거함으로써 같은 번호를 고르는 경우를 없앤다. (setNums)
3. 최대로 가질 수 있는 종류의 수(maxNum) 보다 중복을 제거한 배열에서의 종류 수(setNums.length)가 많다면 maxNum을 반환한다.
4. 위의 경우가 아니라면 무조건 중복이 될 수밖에 없는 경우이므로 setNums.length만큼만 고를 수 있다. 따라서 setNums.length를 반환한다.

*/
