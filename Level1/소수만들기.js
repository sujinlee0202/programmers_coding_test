const solution = (nums) => {
  const result = [];
  let count = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        result.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  for (let i = 0; i < result.length; i++) {
    if (isPrime(result[i])) {
      count++;
    }
  }

  return count;
};

console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 7, 6, 4]));

/*

# 풀이 방법

1. 우선 배열에서 서로 다른 3가지 수를 골라 더한 값을 배열에 담아주었다.
2. 소수인지 판별하는 isPrime 함수를 만들었다.
- Math.sqrt를 사용해 num의 제곱근 수보다 큰 약수는 없다는 방법을 사용했다.
3. 나누는 수 i를 계속 올리면서 딱 떨어 나누어지면 false, 그렇지 않다면 true를 반환한다.
4. isPrime에서 반환값이 true가 된다면 count를 더해준다.

*/
