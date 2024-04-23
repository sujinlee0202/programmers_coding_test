const solution = (par, com) => {
  // 효율성 테스트 실패
  // for (let i = 0; i < com.length; i++) {
  //   if (par.includes(com[i])) {
  //     const index = par.indexOf(com[i]);
  //     par.splice(index, 1);
  //   }
  // }
  // return par.join("");

  // const sortPar = par.sort();
  // const sortCom = com.sort();

  // for (let i = 0; i < sortPar.length; i++) {
  //   if (sortPar[i] !== sortCom[i]) {
  //     return sortPar[i];
  //   }
  // }

  // hash
  const hash = {};
  for (let name of com) {
    hash[name] = (hash[name] || 0) + 1;
  }

  console.log("hash", hash);

  for (let name of par) {
    if (!hash[name] || hash[name] === 0) {
      return name;
    } else hash[name]--;
  }
};

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // leo
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
); // vinko
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
); // mislav
