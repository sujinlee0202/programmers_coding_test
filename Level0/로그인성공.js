const solution = (id_pw, db) => {
  let answer = "fail";

  db.map((item) => {
    if (item[0] === id_pw[0] && item[1] === id_pw[1]) {
      answer = "login";
    } else if (item[0] === id_pw[0]) {
      answer = "wrong pw";
    }
  });

  return answer;
};

const id_pw = ["rabbit04", "98761"];
const db = [
  ["jaja11", "98761"],
  ["krong0313", "29440"],
  ["rabbit04", "98761"],
  ["rabbit00", "111333"],
];

console.log(solution(id_pw, db));
