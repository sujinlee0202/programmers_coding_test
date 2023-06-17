const solution = (chicken) => {
  let coupon = 0;
  let service = 0;

  service = Math.floor(chicken / 10);
  coupon = chicken - service * 10;
  console.log("service", service);

  console.log(" total coupon : ", coupon);

  coupon = coupon + service - Math.floor(service / 10) * 10;
  service = Math.floor(service / 10);
  console.log("service", service);

  console.log(" total coupon : ", coupon);

  coupon = coupon + service - Math.floor(service / 10) * 10;
  service = Math.floor(service / 10);
  console.log("service", service);

  console.log(" total coupon : ", coupon);
};

let chicken = 1081;
console.log(solution(chicken));
