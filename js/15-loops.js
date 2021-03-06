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




    1. //Palyginti du skai??ius a ir b. I??vesti ?? konsol??, kuris didesnis arba jie lyg??s. (4 ta??kai)

  const a = 10;
  const b = 7;

    if (a >= b) {
      console.log('a daugiau arba lygus b');
  } else {
      console.log('a nera daugiau arba lygus b');
  }
  console.log('-----------------------')
  //2. Naudojant cikl??, i??vesti ?? konsol?? skai??ius nuo 1 iki 10. (5 ta??kai)

  
  for(let i = 1; i<11; i++ ){
    console.log(i)
  }
  console.log('-----------------------')
 // 3. Naudojant cikl??, i??vesti ?? konsol?? skai??ius nuo 0, 2, 4, 6, 8, 10. (5 ta??kai)

let c = 2
 for(let i =0; i<11; i++ ){
  
  console.log(i)
}
console.log('-----------------------')
 //4. Naudojant cikl??, sugeneruoti penkis atsitiktinius skai??ius nuo 1 iki 10. I??vesti juos konsol??je. (5 ta??kai)

 for(let i = 1; i<11; i++ ){
  console.log(Math.floor((Math.random() * 11)));
 }
  //5.Naudojant cikl??, spausdinti atsitiktinius skai??ius nuo 1 iki 10. Paskutinis atspausdintas skai??ius turi b??ti 5.
console.log('-----------------------')
  for(let i = 1; i<5; i++ ){
    console.log(Math.floor((Math.random() * 6)));}

  //6. Sukurti masyv??, kurio ilgis b??t?? nuo 20 iki 30, o reik??m??s b??t?? skai??iai nuo 10 iki 30. Surasti antr?? did??iausi?? masyvo reik??m??, nenaudojant sort funkcijos.
 function array(){

 }
  


 // 7. Sugeneruokite masyv??, kurio reik??m??s atsitiktin??s raid??s A, B, C ir D, o ilgis 100. Suskai??iuokite kiek yra kiekvienos raid??s. (7 ta??kai)

 //8. Para??yti funkcij?? - lygineSuma. Funkcijos parametrai - du kintamieji. Test?? reikalavimai - abu kitamieji turi b??ti arba skai??iai arba masyvai(negali b??ti vienas skai??ius, kitas masyvas).
//Jei kintamieji skai??iai, gr????inti skai??i?? sum??, jei kintamieji masyvai - gr????inti masyv?? ilgi?? sum??. Jei suma nelygin?? - gr????inti tekst??, kad suma nelygin??. (10 ta??k??)

//9. Para??yti funkcij?? pirminisSkaicius. Funkcija turi vien?? kintam??j??. Turi b??ti patikrinimas, kad kintamasis yra skai??ius. Funkcija turi gr????inti ar pateiktas skai??ius yra pirminis( pirminis
//skai??ius yra tas, kuris dalinasi tik i?? sav??s ir tik i?? vieneto be liekanos.) (10 ta??k??)

//10. Para??yti funkcij?? telefonoNumeris. Funkcija turi priimti vien?? kintam??j?? - masyv??. Masyvo elementai - skai??iai, ilgis - 10. Funkcija turi gr????inti telefono numer?? tokiu formatu - 
//"(XXX) XXX-XXXX". (10 ta??k??)