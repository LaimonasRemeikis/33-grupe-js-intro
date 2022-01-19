// Susumuoti visus skaičiaus tipo kintamuosius
// Rezultatą išvesti į console
const a1 = 2;
const a2 = -3;
const a3 = 8;

const suma = a1 + a2 + a3;
console.log(suma)

// Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
// Rezultatą išvesti į console

const  t1 = 'league';
const  t2 = 'of';
const  t3 = 'legends';

// Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
// 1-2+3-4+5
// Rezultatą išvesti į console

const sakinys = `${t1} ${t2} ${t3}`;
console.log(sakinys);

const x = [5, 3, 6, 9];
const alternuojantiSuma = x[0] - x[1] + x[2] - x[3];
console.log(alternuojantiSuma);

const d = [t1, t2, t3];
console.log(d);

//Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas 

const sakinys1 = `${d[2]}, ${d[1]} , ${d[0]}`;
console.log(sakinys1)

//dr - d array reversed
const dr = d.reverse();
console.log(dr);

const sakinys3 = dr.join(', ')
console.log(sakinys3);

console.log('----------------');

// Pazymiai: 10, 2, 8, 6, 4.
// Pazymiu suma: 30.
// Pazymiu kiekis: 5.
// Pazymiu vidurkis: 6.

const pazymiai = [10, 2, 8, 6, 4];
console.log('pazymiai:' + pazymiai);

const visiPazymiai = pazymiai[0] + `,` + pazymiai[1] + `,` + pazymiai[2] + `,` + pazymiai[3] + `,` + pazymiai[4] + `.`;
console.log(`Pazymiai:`, visiPazymiai)

let pazymiuKiekis = pazymiai.length
console.log(`Pazymiu kiekis:`, pazymiuKiekis)

let pazymiuSuma = pazymiai[0] + pazymiai[1] + pazymiai[2] + pazymiai[3] + pazymiai[4];
console.log(`Pazymiu suma:`, pazymiuSuma);

let pazymiuVidurkis = (pazymiai[0] + pazymiai[1] + pazymiai[2] + pazymiai[3] + pazymiai[4]) / 5;
console.log(`Pazymiu vidurkis:`, pazymiuVidurkis);
 

console.log('----------------');

 

// Klaseje mokosi 4 asmenys.
// Mokiniu vardai yra Petras, Ona, Jonas, Maryte.

const asmuo1 = `Petras`;
const asmuo2 = `Ona`;
const asmuo3 = `Jonas`;
const asmuo4 = `Maryte`;

const asmenys = [asmuo1, asmuo2, asmuo3, asmuo4]  
console.log(asmenys);

let mokiniuVnt = asmenys.length
const mokiniuSkaicius = `Klaseje mokosi ${mokiniuVnt} asmenys.`;
console.log(mokiniuSkaicius)

const mokiniuVardai = `Mokiniu vardai yra ${asmuo1}, ${asmuo2}, ${asmuo3}, ${asmuo4}.`;
console.log(mokiniuVardai)

