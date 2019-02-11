const TotalBullet = (Magazine, BulletPerMagazine) => {
  let result = Magazine * BulletPerMagazine;
  return result;
}
let Dean = TotalBullet(4, 10);
console.log(Dean);

let Sam = TotalBullet(3, 8);
console.log(Sam);

console.log(Dean + Sam);

let FVampKill = 4;
let NVvampKill = FVampKill / 2;
let AVampKill = ((FVampKill * NVvampKill) / 2) * 3;

// Kinek van több tölténye?
if (Dean > Sam) {
  console.log('Dean');
} else {
  console.log('Sam');
}
// Hány töltény szükséges az összes vámpír kinyírásához?
let BulletVampKill;
let VampCount;
const KillTotalVamp = (BulletVampKill, VampCount) => {
  let result3 = BulletVampKill * VampCount;
  return result3;
}
let NVamp = KillTotalVamp(2, 3);
let FVamp = KillTotalVamp(4, 8);
let AVamp = KillTotalVamp(9, 1);
console.log(`Összes vámpírt kinyírni ${NVamp} + ${FVamp} + ${AVamp} töltény!`);

let BulletsLeft = 8;
while (BulletsLeft >= 0) {
  for (lelottVamp = 0; lelottVamp <= 4; lelottVamp++) {
    
  }
}
