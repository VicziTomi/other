let arr = [1, 2, 3, 4, 5];

let z = [];
for (let i = 0; i < arr.length - 1; i++) {
  let newArr = [];
  for (let j = 0; j < arr.length - 1; j++) {
    let sum = arr[j] + arr[j + 1];
    newArr.push(sum);
    // console.log(newArr);
  }
  let sum = arr[i] + arr[i + 1];
  z.push(sum);
  console.log(z);
}
