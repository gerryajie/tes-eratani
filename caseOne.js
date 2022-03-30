// function polycarp(num) {
//   let result = 0;

//   for (let i = 1; i <= num; i++) {
//     if (i % 3 != 0 && i % 10 != 3) {
//       result = i;
//       console.log(result);
//     }
//   }
// }
// console.log(polycarp(10));

function polycarp(t) {
  // // let t = 0;
  // let n = 0;
  while (t--) {
    let ans = 0;
    let i = 0;
    let j = 1;
    while (i < t) {
      if (j % 3 != 0 && j % 10 != 3) {
        ans = j;
        i++;
      }
      j++;
    }
    return ans;
  }
}

console.log(polycarp(5));
