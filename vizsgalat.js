let a = [1, 2, 3, 4];
let b = [6, 9, 11];
let x = [];
let y = [];
let dif = [];

for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < b.length; j++) {
    x = a.push(i);
    y = b.push(j);
    if (x - y = 0) {
      console.log(x, y);
    } else if (x > y) {
      console.log(x);
    } else {
      console.log(y);
    }
  }
}
console.log(dif);
console.log(a);
console.log(b);
