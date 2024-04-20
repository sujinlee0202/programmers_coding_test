const solution = (str) => {
  const score = [];
  let result = 0;

  let pattern = /(\d+|\D)/g;
  let match = str.match(pattern);

  for (let i = 0; i < match.length; i++) {
    switch (match[i]) {
      case "S":
        score.push(match[i - 1] * 1);
        break;
      case "D":
        score.push(Math.pow(match[i - 1], 2));
        break;
      case "T":
        score.push(Math.pow(match[i - 1], 3));
        break;
      case "*":
        score[score.length - 1] *= 2;
        score[score.length - 2] *= 2;
        break;
      case "#":
        score[score.length - 1] *= -1;
        break;
    }
  }

  result = score[0] + score[1] + score[2];
  return result;
};

console.log(solution("1S*2T*3S"));

/*

# 풀이방법

1. 정규 표현식을 이용해 숫자와 문자를 분리해 배열에 넣는다.
2. S, D, T, *, # 이 나왔을 경우의 연산을 처리한다.
3. 각 score를 더한다.

*/