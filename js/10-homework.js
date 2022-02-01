/*Tarpusavyje palyginti skaičiaus tipo kintamuosius:
a) kuris didesnis
b) kuris mažesnis
c) ar jie lygūs
d) ar jie nelygūs
e) kuris didesnis arba lygus
f) kuris mažesnis arba lygus */

const a = 7;
const b = 20;

if (a > b) {
    console.log('Pomidoras');
} 
else {
    console.log('Bandykite kitą kartą');
} 
if (a < b) {
    console.log ('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

if (a === b) {
    console.log('Pomidoras');
} else  {
    console.log('Bandykite kitą kartą');
    if (a !== b) {
        console.log('Pomidoras')
    } else {
        console.log('Bandykite kitą kartą')
    }
}
if (a >= b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}
if (a <= b) {
    console.log ('Pomidoras')
}else {
    console.log('Bandykite kitą kartą')
}


//Išvesti teksto tipo kintamųjų ilgius
const g = ('naujas')
const r = ('senas')

const daiktas = g.length
console.log(daiktas);
const daiktas1 = r.length
console.log(daiktas1)

console.log('--------------------')
/*Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
a)kuris didesnis
b)kuris mažesnis
c)ar jie lygūs
d)ar jie nelygūs
e)kuris didesnis arba lygus
f)kuris mažesnis arba lygus */

const v = ('Pomidoras')
const z = ('kopustas')

if (v.length > z.length) {
    console.log('Pomidoras');
} 
else {
    console.log('Bandykite kitą kartą');
} 
if (v.length < z.length) {
    console.log ('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

if (v.length === z.length) {
    console.log('Pomidoras');
} else  {
    console.log('Bandykite kitą kartą');
    if (v.length !== z.length) {
        console.log('Pomidoras')
    } else {
        console.log('Bandykite kitą kartą')
    }
}
if (v.length >= z.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}
if (v.length <= z.length) {
    console.log ('Pomidoras')
}else {
    console.log('Bandykite kitą kartą')
}
//Išvesti sąrašo tipo kintamųjų ilgius

const months = ['Sausis','Vasaris', 'Kovas', 'Balandis', 'Geguze', 'birzelis', 'liepa', 'rugpjutis', 'rugsejis', 'spalis', 'lapkritis', 'gruodis'];
const day = ['pirmadienis', 'antradienis', 'treciadienis', 'ketvirtadienis', 'penktadienis', 'sestadienis', 'sekmadienis'];

const sarasoIlgis = months.length;
console.log (sarasoIlgis);

const sarasoIlgis2 = day.length;
console.log(sarasoIlgis2);

//Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
/*
a) kuris didesnis
b) kuris mažesnis
c) ar jie lygūs
d) ar jie nelygūs
e) kuris didesnis arba lygus
f) kuris mažesnis arba lygus*/

if (sarasoIlgis > sarasoIlgis2) {
    console.log('pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}
if (sarasoIlgis < sarasoIlgis2) {
    console.log('pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}
if (sarasoIlgis === sarasoIlgis2) {
    console.log('pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}
if (sarasoIlgis !== sarasoIlgis2) {
    console.log('pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}
if (sarasoIlgis >= sarasoIlgis2) {
    console.log('pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}
if (sarasoIlgis <= sarasoIlgis2) {
    console.log('pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}
//Ciklo for panaudojimas
//Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
/*
a) 0 - 0
b) 0 - 4
c) 0 - 100
d) 574 - 815
e) -50 - 50
f) -70 - 30*/

let i = 0;
for (let i = 0; i <= 0; i++);
console.log (i);

let sum = 0;
for( let i = 0; i<=4; i++) {
    sum = sum + i;}
    console.log(sum)

    let sum1 = 0;
for(let i = 0; i<=100; i++) {
    sum1= sum1+i;}
    console.log(sum1)

    let sum2 = 0;
    for(let i=574; i<=815; i++){
        sum2 = sum2 + i;
    }
    console.log(sum2)

    let sum3 = 0;
    for(let i=-50; i<=-50; i++){
        sum3 = sum3 + i;
    }
    console.log(sum3)

    let sum4 = 0;
    for(let i=-70; i<=-30; i++){
        sum4 = sum4 +i;
    }
    console.log(sum4)

    //panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
//pvz.: “abcdef” -> “fedcba”

const zodis = 'abcdef';
let naujasZodis = '';
for(let i=zodis.length-1; i>=0; i--)
{
    naujasZodis+=zodis[i];
}
console.log(naujasZodis)

/*Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
a) 0 - 11
b) 8 - 31
c) -18 - 18 */

const al = 3;
const bl = 5;
const cl= 7;

let modulis = 0;

for(let i=0; i<=11; i++)
    if (i % al === 0){
     modulis++;}

    console.log(modulis);

    let modulis2 = 0;

    for(let i=0; i<=11; i++)
    if (i % bl === 0){
     modulis2++;}

    console.log(modulis2);

    let modulis3 = 0;
    for(let i=0; i<=11; i++)
    if (i % cl === 0){
     modulis3++;}

    console.log(modulis3);

console.log ('------------------------------')
    function Name(id){
        var name;
        switch(id){
          case 1:
            name = 'Mercury'
            break
          case 2:
            name = 'Venus'
            break
          case 3:
            name = 'Earth'
            break
          case 4:
            name = 'Mars'
            break
          case 5:
            name = 'Jupiter'
            break
          case 6:
            name = 'Saturn'
            break
          case 7:
            name = 'Uranus'
            break
          case 8:
            name = 'Neptune'
        }
        return name;
      }

      
      console.log(Name(2));
console.log(Name(5));
console.log(Name(3));

function check(a, x) {
     return  a.includes(x); }
  

  console.log(check([66, 101], 66), );
    console.log(check([101, 45, 75, 105, 99, 107], 107), );
    console.log(check(['t', 'e', 's', 't'], 'e'),);
    console.log(check(['what', 'a', 'great', 'kata'], 'kat'), );

const arr = [1,-4,7,12]


    function positiveSum(arr) {
        let sum = 0;
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] > 0) sum += arr[i]
        }
        return sum;
        
      }
     
      console.log(arr)

      function arrayMadness(a, b) {
        let sumA = 0;
        console.log(a.length)
        for (let i=0; i<a.length ; i++) {
          sumA = sumA + Math.pow(a[i], 2)
          console.log(sumA)
        }
        console.log(sumA)
        let sumB = 0;
        for (let i=0; i<b.length ; i++){
          sumB = sumB+Math.pow(b[i], 3)
        }
        console.log(sumB)
      
        return sumA > sumB 
      }
      console.log(arrayMadness([4,5,6],[1,2,3]))

      function correctPolishLetters (string) {
        var dict = {'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z'};
        return string.replace(/[ąćęłńóśźż]/g, match => dict[match]);
      }
      console.log('---------------------------------------')

      function strCount(str, letter){  
        return str.split(letter).length-1}

        console.log(strCount('Hello', 'o'), 1);
console.log(strCount('Hello', 'l'), 2);
console.log(strCount('', 'z'), 0)

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
        return (mpg * fuelLeft >= distanceToPump)
    }
   
  
  console.log(zeroFuel(50, 25, 2), true);
    console.log(zeroFuel(100, 50, 1), false);


console.log('---------------------------------------')


function differenceInAges(ages){
    return [Math.min(...ages), Math.max(...ages), Math.max(...ages)-Math.min(...ages)];
}


console.log(differenceInAges([82, 15, 6, 38, 35]),  [6, 82, 76] )
console.log(differenceInAges([57, 99, 14, 32]),  [14, 99, 85] ) 

function getDrinkByProfession(param){
    switch(param.toLowerCase()){
        case "Jabroni" : return	"Patron Tequila"
        case "School Counselor":return "Anything with Alcohol"
        case "programmer": return "Hipster Craft Beer"
        case "bike gang member": return "Moonshine" 
        case "politician": return "Your tax dollars" 
        case "rapper":  return "Cristal" 
      default: return "Beer"
    }}

      console.log(getDrinkByProfession("jabrOni"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
console.log(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
console.log(getDrinkByProfession("prOgramMer"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
console.log(getDrinkByProfession("bike ganG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
console.log(getDrinkByProfession("poLiTiCian"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");

console.log('------------------------------------------------');

/*
Funkcija pavadinimu “isrinktiRaides”:
priima du kintamuosius:
pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
antrasis nurodo kas kelintą raidę išrinkti
patikrinti, ar pirmasis kintamasis yra teksto tipo:
jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
priešingu atveju tęsiame darbą
patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
priešingu atveju tęsiame darbą
patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
priešingu atveju tęsiame darbą
patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
priešingu atveju tęsiame darbą
patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
priešingu atveju tęsiame darbą
išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
gražina rezultatą
TESTAI:
console.log( isrinktiRaides( “abcdefg”, 2 ) );
rezultatas: “bdf”
console.log( isrinktiRaides( “abcdefghijkl”, 3 ) );
rezultatas: “cfil”
console.log( isrinktiRaides( “abc”, 0 ) );
rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
console.log( isrinktiRaides( “abc”, 4 ) );
rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
console.log( isrinktiRaides( 1561, 2 ) );
rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”
*/

function isrinktiRaides(a, b) {
    const c = textCheck (a);
    switch (c){
    case 1:
        return `Pirmasis kintamasis yra netinkamo tipo.`
        break
    case 2:
        return `Pirmojo kintamojo reikšmė yra netinkamo dydžio.`
        break    
    }
    const d = numCheck (b);
    switch (d){
        case 1:
            return `Antrasis kintamasis yra netinkamo tipo.`
            break
        case 2:
            return `Antrasis kintamasis turi būti didesnis už nulį`
            break          
    }  if (a.length < b){
        return `Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.`
    } else {
        let newstring = "";
        for (let i = b - 1; i < a.length; i = i + b) {
            const symbol = a[i];
            newstring = newstring + symbol;
            
        }
        return newstring
    }
}function textCheck(texttext){
if (typeof texttext !== "string") {   
return 1
} else {
    if (texttext.length > 0 &&  texttext.length <= 100){
        return 3;
    } else {
        return 2;
    }
}   
}

function numCheck(numberNumber){
    if (typeof numberNumber !== "number" || numberNumber % 1 !== 0) {
    return 1
    } else {
        if (numberNumber > 0){
            return 3;
        } else {
            return 2;
        }
    }   
    
}

console.log( isrinktiRaides( `abcdefg`, 2 ) );
console.log( isrinktiRaides( `abcdefghijkl`, 3 ) );
console.log( isrinktiRaides( `abc`, 0 ) );
console.log( isrinktiRaides( `abc`, 4 ) );
console.log( isrinktiRaides( 1561, 2 ) );

/*
Funkcija pavadinimu “dalyba”:
turi priimti du kintamuosius
reikia sugalvoti ir įgyvendinti kuo daugiau logiškų patikrinimų, kurie padėtų apsaugoti funkciją nuo neteisingo panaudojimo
esant blogoms sąlygoms, išvesti atitinkamą pranešimą
esant geroms - tęsti darbą
į atskirą kintamąjį išsaugoti apskaičiuotą dviejų skaičių dalybos reikšmę
daliname pirmąjį skaičių iš antrojo
gražinti suskaičiuotą reikšmę
TESTAI:
sugalvoti bent 5 testus, kurie bendrai iš esmės patvirtintu gerą funkcijos veikimą
*/

function dalyba(v,b){
const rezultatas = v / b;
if(typeof v !== 'number' && typeof b !== 'number'){
    return 'error'
}
if(isFinite(Number)){
    return 'bg'
}
return rezultatas;}

console.log(2," ", dalyba(35, 0));
console.log(3, " ", dalyba(42.7, NaN));
console.log(4, " ", dalyba(42.7, -37));
console.log(5, " ", dalyba(4e5, false));
console.log(6, " ", dalyba(43, "asfdgf"));
console.log(7, " ", dalyba("i", 12));
console.log(8, " ", dalyba(12, 4));

console.log('-------------------------------------------------------------')



function solution(str){
    let newWord = ''; 
    for (let i =str.lenght -1; i>=0; i--)
      newWord +=str[i];
      return newWord;
      
    
  }
  
  console.log(solution('world'), 'dlrow');
    console.log(solution('hello'), 'olleh');
    console.log(solution(''), '');
    console.log(solution('h'), 'h');

    /*Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.*/

function digitize(n) {
    const arrayNumReverse = String(n).split('').map(Number).reverse()
    return arrayNumReverse;
  }

  console.log(digitize(35231),[1,3,2,5,3]);


 /* It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
   You're given one parameter, the original string. You don't have to worry with strings with less than two characters.*/

   function removeChar(str){
    let remove = ''
   for(let i = 1; i < str.length - 1; i++){
      remove += str[i];
   }
    return remove;
    
  
  };
 console.log(removeChar('eloquent'), 'loquen');
   console.log(removeChar('country'), 'ountr');
   console.log(removeChar('person'), 'erso');
   console.log(removeChar('place'), 'lac');
   console.log(removeChar('ooopsss'), 'oopss');


  /* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number. */

function sumMix(x){
    let sum = 0;
    for (i = 0; i < x.length; i++) {
      sum += Number(x[i]);
    }
    return sum;
  }



  console.log(sumMix([9, 3, '7', '3']), 22);
  console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
  console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 
  
  /*Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]*/

function maps(x){
    let sum = [];
    for(let i = 0; i < x.length; i++){
       sum.push(x[i] * 2);
    }
  return sum;
  }

  console.log(maps('[1, 2, 3]'), [2, 4, 6]);
    console.log(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]); 
    console.log(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);

    /*You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example:*/


function monkeyCount(n) {
    let sum = [];
      for( let i = 1; i <= n; i++ ){
        sum.push(i)
      }
      return sum;
    }

    console.log((monkeyCount(5)), [1, 2, 3, 4, 5]);
    console.log((monkeyCount(3)), [1, 2, 3]);
    console.log((monkeyCount(9)), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    console.log((monkeyCount(10)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    console.log((monkeyCount(20)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  

    




    

    /*
Funkcijos:
- masyvo ilgi
- teksto ilgi
- pirma teksto raide
- paskutine teksto raide
- vidurine teksto raide
- triju skaiciu vidurki
- pasisveikinimo sakinys, kur duodamas tik vardas: "Sveiki, as esu [Vardenis]!"
*/
console.log('---------')

//MASYVO ILGIO SKAICIAVIMO BUDAI
function arrIlgis(arr) {
    return arr.length;
  }
  console.log(arrIlgis([4,5,6,9,8]))
  
  console.log('---------')
  const arrIlgis2 = (array) => array.length
  console.log(arrIlgis2([2,5,6]))

  console.log('---------')

  const arrIlgis1 = function(array){
      return array.length;
  }
  console.log(arrIlgis1([2,6,5,9,8,7,2,3]))

  console.log('---------')

  //TEKSTO ILGIO SKAICIAVIMO BUDAI

  function tekstoIlgis(text){
      return text.length;
  }
  console.log(tekstoIlgis('labas vakaras'))

  console.log('---------')

  const tekstoIlgis2 = function(text){
      return text.length
  }
  console.log(tekstoIlgis2('skani arbata'))
  console.log('---------')

  const tekstoIlgis3 = (text) => text.length
  console.log(tekstoIlgis3('grazios dienos!'))
  console.log('---------')

  //Pirma teksto raide

  function firstL(text){
      return text.charAt(0)
  }
console.log(firstL('hahaha'))
console.log('---------')

const FirstL1 = function(text){
    return text.charAt(0)
    
}
console.log(FirstL1('juokelis'))

console.log('----------')

const firstL2 = (text) => text.charAt(0)
console.log(firstL2('google'))

console.log('----------')
//- paskutine teksto raide

function lastL(text){
    return text.substr(text.length -1)
}
console.log(lastL('google'))
console.log('----------')

const lastL1 = function(text){
    return text.substr(text.length -1)
}
console.log(lastL1('random'))
console.log('----------')

const lastL2 = (text) => text.substr(text.length -1)
console.log(lastL2('fakeid'))
console.log('----------')

//- vidurine teksto raide
// - math.ceil --> suapvalina netoks tikslus apvalina i virsu , Math.round tisklesnis
function middleL(str){
    return str.substr(Math.round(str.length / 2 - 1),str.length % 2 === 0 ? 2 :1);
}
console.log(middleL('masina'))

console.log('----------')

const middleL1 = function(str){
    return str.substr(Math.round(str.length / 2 - 1),str.length % 2 === 0 ? 2 :1);
}
console.log(middleL1('taxi'))

console.log('----------')

const middleL2 = (str) => str.substr(Math.round(str.length / 2 - 1),str.length % 2 === 0 ? 2 :1);

console.log(middleL2('trupiniai'))
console.log('----------')

//- triju skaiciu vidurki

function average(a, b, c){
    return (a+b+c)/3
}
const average1 = function (a, b, c){
    return (a+b+c)/3
}
const average2 = (a, b, c) =>{
    return (a+b+c)/3
}
const average3 = (a, b, c) => (a+b+c)/3

console.log(average(3, 9, 27));
console.log(average1(3, 9, 27));
console.log(average2(3, 9, 27));
console.log(average3(3, 9, 27));

console.log('----------')

//- pasisveikinimo sakinys, kur duodamas tik vardas: "Sveiki, as esu [Vardenis]!"

function pasisveikinimas(vardas){
    return `Sveiki, as esu ${vardas}!`
}
const pasisveikinimas1 = function(vardas){
    return `Sveiki, as esu ${vardas}!`
}
const pasisveikinimas2 = (vardas) => {
    return `Sveiki, as esu ${vardas}!`
}
const pasisveikinimas3 = (vardas) => `Sveiki, as esu ${vardas}!`;

console.log(pasisveikinimas(`Laimonas`));
console.log(pasisveikinimas1(`Laimonas`));
console.log(pasisveikinimas2(`Laimonas`));
console.log(pasisveikinimas3(`Laimonas`));


var orderedCount = function (text) {
    let array = [];
  for(i = 0; i<text.lenght; i++){
    if(array[text[i]]){
      array[text[i]] += array[text[i]];
    }else{
      array[text[i]] = 1;
    }
  }
    return array[text[i]] ;
  }
 console.log(orderedCount('abracadabra'))