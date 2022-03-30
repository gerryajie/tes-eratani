// function insertion sort

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i - 1; j > -1; j--) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }

  return arr;
}

console.log(sort([19, 9, 98, 45, 1, 13, 100, 64, 24, 25, 39]));
console.log(sort([2, 7, 87, 8, 100, 5, 37, 26, 18, 50, 0]));
