let i;
let number = 1;
for (i = 0; i <= 99; i++) {
  if ((number % 3) === 0 && (number % 5) === 0) {
    console.log('FizzBuzz');
    number += 1;
  } else if (number % 3 === 0) {
    console.log('Fizz');
    number += 1;
  } else if (number % 5 === 0) {
    console.log('Buzz');
    number += 1;
  } else {
    console.log(number);
    number += 1;
  }
}
