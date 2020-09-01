'use strict';

const colors = require('colors');
colors.enable();

let greenRed = ``;
for (let i = 0; i < 40; i ++) {
  greenRed+=`${colors.bgGreen('   ')}${colors.bgRed('   ')}`
}
let cyMa = ``;
for (let i = 0; i < 40; i ++) {
  cyMa += `${colors.bgCyan('   ')}${colors.bgMagenta('   ')}`
}

console.log(`${greenRed}`);
console.log(`${cyMa}`);
console.log(`${greenRed}`);
console.log(`${cyMa}`);
console.log(`${greenRed}`);
console.log(`${cyMa}`);
console.log(`${greenRed}`);
console.log(`${cyMa}`);
// console.log(' ');

