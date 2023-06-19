const solution = (name, yearning, photo) => {
  const answer = [];
  let count = 0;

  for (let i = 0; i < photo.length; i++) {
    count = 0;

    for (let j = 0; j < name.length; j++) {
      photo[i].find((element) => {
        if (element === name[j]) {
          count += yearning[j];
        }
      });
    }

    answer.push(count);
  }

  return answer;
};

const name = ["may", "kein", "kain", "radi"];
const yearning = [5, 10, 1, 3];
const photo = [
  ["may", "kein", "kain", "radi"],
  ["may", "kein", "brin", "deny"],
  ["kon", "kain", "may", "coni"],
];

console.log(solution(name, yearning, photo));
