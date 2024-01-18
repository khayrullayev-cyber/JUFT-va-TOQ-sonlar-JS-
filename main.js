let arr = [4, 16, 19, 22, 15, 50, 87, 45, 21, 11, 144, 967, 19124];
let even = [];
let odd = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    even.push(arr[i]);
  } else {
    odd.push(arr[i]);
  }
}

console.log("Juft sonlar:", even);
console.log("Toq sonlar:", odd);
