const solution = (chicken) => {
  let service = 0;
  let coupon = 0;
  let total = 0;

  service = chicken;

  while (chicken > 0) {
    service = Math.floor((service + coupon) / 10);
    coupon = coupon + chicken - service * 10;
    chicken = service;
    total = total + chicken;
  }

  return total;
};

const chicken = 1081;
console.log(solution(chicken));
