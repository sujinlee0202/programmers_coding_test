const solution3 = (n) => {
  const isPrime = new Array(n + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  console.log(isPrime);

  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  let count = 0;
  for (let i = 0; i <= n; i++) {
    if (isPrime[i]) {
      count++;
    }
  }

  return count;
};

const n = 5;

console.log(solution3(n)); // 3

/*

# 풀이 방법

1. 처음에 아래와 같이 풀었는데 "시간 초과" 에러가 발생했다.
```
const solution = (n) => {
  let count = 0;

  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= i; j++) {
      if (i % j === 0 && i / j !== 1) {
        break;
      }
      if (i % j === 0 && i / j === 1) {
        count++;
      }
    }
  }
  
  return count;
};
```
- 발생한 이유는 큰 숫자가 들어왔을 때 2, 3, 4, 5 ... 이렇게 모든 경우의 수를 다 확인하다보니 오래 걸린 듯 했다.

2. 결국 "에라토스테네스의 체"라는 소수를 찾는 방식을 사용해 해결했다.
또한 다음의 글도 유용했다.https://school.programmers.co.kr/questions/21359
- 어떤 자연수 n이 있을 때 루트 n보다 작은 모든 소수들로 나누어 떨어지지 않는다면 n은 소수이다.

3. 해결
1) 소수가 아닌 index 0, 1의 배열에 false를 두고 나머지를 소수로 가정해 true로 채운다.
2) i를 2부터 시작해 i의 제곱이 n보다 작거나 같을 때까지 반복한다.
  - i가 소수인 경우에만 실행된다 (if(isPrime[i]))
  - i의 배수는 모두 소수가 아니다. => isPrime을 false로 변경
3) isPrime의 true 개수를 count한다.

*/
