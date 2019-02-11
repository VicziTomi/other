let tomb = [3, 6, 2, 1, 5];
let eredmeny = [];
let temp = [];

for (let i = 0; i < 3; i++) {
  for (let j = 1; j < tomb.length; j++) {
    if (tomb[i] > tomb[j]) {
      eredmeny.push(tomb[i]);
    } else {
      temp.push(tomb[j]);
    }
  }
}

console.log(eredmeny);
console.log(temp);
