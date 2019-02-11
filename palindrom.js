let szoveg = 'cba abc';
let forditva = '';

for (let i = szoveg.length - 1; i >= 0; i--) {
  forditva += szoveg[i];
}
// console.log(szoveg);
// console.log(forditva);

if (szoveg !== forditva) {
  console.log('Nem jó');
} else {
  console.log('Palindrom');
}
