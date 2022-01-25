
const Petras = [10, 2, 8, 4];
const Maryte = [1, 3, 5, 7, 9];
const Ona = [5, 6, 7, 8, 9];
const Jurgis = [9, 9, 6];

let suma = 0;

for (let i = 0; i< Petras.length; i++) {
    suma +=Petras[i];
}
console.log(suma / Petras.length);

function sumavimas() {

}

const a = 5;
const b = 7;
const c = 8;
const d = 9;

const r1 = sumavimas(a, b);
const r2 = sumavimas(b, c);
const r3 = sumavimas(c, d);
const r4 = sumavimas(a, d);

console.log(a);
console.log(b);
console.log(c);
console.log(d);

console.log(a, b, ' = ', r1);
console.log(b, c, ' = ', r1);
console.log(a, b, ' = ', r1);
console.log(a, b, ' = ', r1);

