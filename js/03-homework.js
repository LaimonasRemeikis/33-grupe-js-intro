// Susumuoti visus skaičiaus tipo kintamuosius
// Rezultatą išvesti į console
// Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
// Rezultatą išvesti į console
// Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
// 1-2+3-4+5
// Rezultatą išvesti į console
// Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas

const a1 = 2;
const a2 = -3;
const a3 = 8;

const suma = a1 + a2 + a3;
console.log(suma)

const  t1 = 'league';
const  t2 = 'of';
const  t3 = 'legends';

const sakinys = `${t1} ${t2} ${t3}`;
console.log(sakinys);

const x = [5, 3, 6, 9];
const alternuojantiSuma = x[0] - x[1] + x[2] - x[3];
console.log(alternuojantiSuma);

const d = [t1, t2, t3];
console.log(d);

const sakinys1 = `${d[2]}, ${d[1]} , ${d[0]}`;
console.log(sakinys1)

//dr - d array reversed
const dr = d.reverse();
console.log(dr);

const sakinys3 = dr.join(', ')
console.log(sakinys3);

console.log('----------------');

const pazymiai = [10, 2, 8, 6, 4];
console.log('pazymiai:' + pazymiai);

const pazymai=[10,2,8,6,4]
let p1 = 10;
const a=1;
let p2 = 2;
const b=1;
let p3 = 8;
const c=1;
let p4 = 6;
const d=1;
let p5 = 4;
const e=1;

const suma =  p1 + p2 + p3 + p4 + p5;
console.log('Pazymiu suma: ' + (p1+p2+p3+p4+p5));
console.log('Pazymiu kiekis: ' + (a+b+c+d+e));
console.log('Pazymiu vidurkis: ' + ((p1+p2+p3+p4+p5)/5));


// Pazymiai: 10, 2, 8, 6, 4.
// Pazymiu suma: 30.
// Pazymiu kiekis: 5.
// Pazymiu vidurkis: 6.


console.log('----------------');


const asmuo1 = 'Petras';
const asmuo2 = 'Ona';
const asmuo3 = 'Jonas';
const asmuo4 = 'Maryte';

const asmenys = [asmuo1, asmuo2, asmuo3, asmuo4];
console.log(asmenys);

// Klaseje mokosi 4 asmenys.
// Mokiniu vardai yra Petras, Ona, Jonas, Maryte.

const sakinys1 = `Klaseje mokosi 4 asmenys.`
console.log(sakinys1)
const sakinys2 = `Mokiniu vardai yra Petras, Ona, Jonas, Maryte.`
console.log(sakinys2)