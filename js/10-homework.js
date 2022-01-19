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
    
