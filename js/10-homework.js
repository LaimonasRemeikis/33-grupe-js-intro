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
