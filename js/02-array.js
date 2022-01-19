// Array - masyvas, sarasas, listas, matrica

console.log('---------------');

const maistoSarasas = ['pomidoras', 'agurkas', 'bulve', 'svogunas'];
console.log(maistoSarasas);

console.log('Reikia nupirkti:', maistoSarasas[0]);
console.log('Reikia nupirkti:', maistoSarasas[1]);
console.log('Reikia nupirkti:', maistoSarasas[2]);
console.log('Reikia nupirkti:', maistoSarasas[3]);

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
 

 // Klaseje mokosi 4 asmenys.
// Mokiniu vardai yra Petras, Ona, Jonas, Maryte.

const asmuo1 = `Petras`;
const asmuo2 = `Ona`;
const asmuo3 = `Jonas`;
const asmuo4 = `Maryte`;

const asmenys = [asmuo1, asmuo2, asmuo3, asmuo4]  
console.log(asmenys);

const mokiniuVnt = asmenys.length
const mokiniuSkaicius = `Klaseje mokosi ${mokiniuVnt} asmenys.`;
console.log(mokiniuSkaicius)

const mokiniuVardai = `Mokiniu vardai yra ${asmuo1}, ${asmuo2}, ${asmuo3}, ${asmuo4}.`;
console.log(mokiniuVardai)

 

