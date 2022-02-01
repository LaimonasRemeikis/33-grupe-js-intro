const list = ['Agurkas', 'Zirnis', 'Salota', 'Ridikelis', 'Pomidoras'];
console.log(list);

// FOR
console.log('FOR: --------------------');
for (let i = 0; i < list.length; i++) {
    const item = list[i];
    console.log(item);
}

for (let fr = 0; fr < 0.9;) {
    fr = Math.random();
    console.log(fr);
}

// WHILE
console.log('WHILE: --------------------');
let iw = 0;
while (iw < list.length) {
    const item = list[iw];
    console.log(item);
    iw++;
}

const imax = 5;
let ir = 0;
let rn = 0;
while (rn < 0.9 && ir < imax) {
    rn = Math.random();
    console.log(`${ir}) ${rn}`);
    ir++;
}

// DO-WHILE
console.log('DO-WHILE: --------------------');
let idw = 0;
do {
    const item = list[idw];
    console.log(item);
    idw++;
} while (idw < list.length);

// MAP
console.log('MAP: --------------------');
const mapMarks = [10, 2, 8, 4, 6];
const doubleMapMarks = mapMarks.map(n => n * 2);

console.log(mapMarks);
console.log(doubleMapMarks);

const listFirstLetters = list.map(item => item[0]);
const listLengths = list.map(item => item.length);
console.log(list);
console.log(listFirstLetters);
console.log(listLengths);

const nums = [2148525, 45852, 84562, 859625];
const numsFirstNum = nums.map(n => +('' + n)[0]);
console.log(numsFirstNum);

// FILTER
console.log('FILTER: --------------------');
const filterMarks = [10, 2, 8, 4, 6];
const goodMarks = filterMarks.filter(n => n >= 7);

console.log(filterMarks);
console.log(goodMarks);

const filteredList = list.filter(item => item.length > 6 && item.length < 9);
console.log(filteredList);

// MAP + FILTER
console.log('MAP + FILTER: --------------------');
//const names = ['Jonas', 'Ona', 'Rasa', 'Petras', 'Maryte', 'Ciubaka'];

// pasilikti tik vardu pirmas raides, kur vardu ilgis yra maziau 6 simboliu
/*const modifiedNames = names
    .filter(name => name.length < 6)
    .filter(name => name.length < 6)
    .filter(name => name.length < 6)
    .filter(name => name.length < 6)
    .map(name => name[0]);
console.log(modifiedNames);

const modifiedNames2 = names
    .map(name => name[name.length - 1])
    .filter(name => name.length < 6);
console.log(modifiedNames2);*/

// SORT
// REDUCE
// FOR-EACH




function countSheeps(arrayOfSheep) {
    count = 0;

   for (let i = 0; i < arrayOfSheep.length; i++){
     if (arrayOfSheep[i] === true){
       count += 1;
     }
   }
   return count;
 }

  array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];

  console.log(countSheeps(array1), 17, "There are 17 sheeps in total")

  function abbrevName(name){
    return name.split(" ").map(el => el[0].toUpperCase()).join(".")
  }

    console.log(abbrevName("Sam Harris"), "S.H");
    console.log(abbrevName("Patrick Feenan"), "P.F");
    console.log(abbrevName("Evan Cole"), "E.C");
    console.log(abbrevName("P Favuzzi"), "P.F");
    console.log(abbrevName("David Mendieta"), "D.M");




    1. //Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)

  const a = 10;
  const b = 7;

    if (a >= b) {
      console.log('a daugiau arba lygus b');
  } else {
      console.log('a nera daugiau arba lygus b');
  }
  console.log('-----------------------')
  //2. Naudojant ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)

  
  for(let i = 1; i<11; i++ ){
    console.log(i)
  }
  console.log('-----------------------')
 // 3. Naudojant ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)

let c = 2
 for(let i =0; i<11; i++ ){
  
  console.log(i)
}
console.log('-----------------------')
 //4. Naudojant ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

 for(let i = 1; i<11; i++ ){
  console.log(Math.floor((Math.random() * 11)));
 }
  //5.Naudojant ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5.
console.log('-----------------------')
  for(let i = 1; i<5; i++ ){
    console.log(Math.floor((Math.random() * 6)));}

  //6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti antrą didžiausią masyvo reikšmę, nenaudojant sort funkcijos.
 function array(){

 }
  


 // 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

 //8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
//Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)

//9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
//skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)

//10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
//"(XXX) XXX-XXXX". (10 taškų)