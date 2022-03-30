function polycarp(t) {
  while (t--) {
    let ans = 0;
    let i = 0;
    let j = 1;
    while (i <= t) {
      if (j % 3 != 0 && j % 10 != 3) {
        ans = j;
        i++;
      }
      j++;
    }
    return ans;
  }
}

console.log(polycarp(10));
console.log(polycarp(1));
console.log(polycarp(2));
console.log(polycarp(3));
console.log(polycarp(4));
console.log(polycarp(5));
console.log(polycarp(6));
console.log(polycarp(7));
console.log(polycarp(8));
console.log(polycarp(9));
console.log(polycarp(1000));
