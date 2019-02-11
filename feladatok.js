//Napszak szerinti üdvözlés
let now = new Date();
console.log(now.getHours());
if (6 >= now > 0) {
    console.log('Regglet!');
} else if (12 >= now > 6) {
    console.log('Délelőtt!');
} else if (18 >= now > 12) {
    console.log('Délutánt!');
} else {
    console.log('Estét!');
}

if (12 < now) {
    console.log('DE.');
} else {
    console.log('DU.!');
}