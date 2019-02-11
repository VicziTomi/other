let msg = 'admin';
let temp = ''; 
let n = 1;
let result = '';

for (let i = 0; i < msg.length; i++) {
  temp = msg.charCodeAt(i) + n;
  result += String.fromCharCode(temp);
}
console.log(msg.length);
console.log(result);

if (result !== 'benjo') {
  console.log('Nem jó...');
} else {
  console.log('OK');
}
