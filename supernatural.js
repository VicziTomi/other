let vampirok = 12;
let vampirNo = 3;
let vampirAlfa = 1;
let vampirFfi = vampirok - (vampirNo + vampirAlfa);
console.log('Férfi vámpírok száma: ', vampirFfi);
console.log('Női vámpírok száma: ', vampirNo);
console.log('Alfa vámpírok száma: ', vampirAlfa);

let vampirFfiKill = 4;
let vampirNoKill = vampirFfiKill / 2;
let vampirAlfaKill = ((vampirFfiKill + vampirNoKill) / 2) * 3;
console.log('Ennyi töltény kell kinyírni egy Alfát: ', vampirAlfaKill);
console.log('Ennyi töltény kell kinyírni egy Női vámpírt: ', vampirNoKill);
console.log('Ennyi töltény kell kinyírni egy Férfi vámpírt: ', vampirFfiKill);

let karakter1 = 'Sam';
let karakter2 = 'Dean';
let tarSam = 3;
let toltenySam = tarSam*8;
let tarDean = 4;
let toltenyDean = tarDean*10;
let toltenyTotal = toltenySam + toltenyDean;
console.log('Sam töltyéneinek száma: ', toltenySam);
console.log('Dean töltyéneinek száma: ', toltenyDean);
console.log('Total töltyéneinek száma: ', toltenyTotal);

//Kinek van több tölténye?
console.log('Kinek van több tölténye?');
if (toltenySam > toltenyDean) {
    console.log(karakter1);
} else {
    console.log(karakter2)
}

let result1 = vampirAlfa * vampirAlfaKill + vampirFfi * vampirFfiKill + vampirNo * vampirNoKill;
console.log('Ennyi golyó kell az összes vámpír kivégzéséhez: ', result1)

//CSAK NŐI VÁMPÍROKRA MEGÍRVA
let golyo == 8;
let zombiCount == 1;
if (golyo == zombiCount * vampirNoKill) {
    zombiCount += zombiCount +1;
    console.log(zombiCount);
    } else 