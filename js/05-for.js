const months = ['Sausis', 'Vasaris', 'Kovas' , 'Balandis'];

console.log ('Metu menesiai:');

for (let i = 0; i < months.length;  i++ ) {
    console.log ((i + 1) + '. ' + months [i]);
}

//Panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
//pvz.: "abcdef" -> "fedcba"


const text1 = 'abcdef';
let reverseText1 = '';

for (let i = 0; i < text1.length; i++) {
    const symbol = text1[text1.length - 1 - i];
    reverseText1 += symbol;
}

console.log(`${text1} --> ${reverseText1}`);

console.log('--------------------');

const text2 = 'pomidoras';
let reverseText2 = '';

for (let i = 0; i < text2.length; i++) {
    const symbol = text2[i];
    reverseText2 = symbol + reverseText2;
}

console.log(`${text2} --> ${reverseText2}`);

console.log('--------------------');

const text3 = 'šaškės';
let reverseText3 = '';

for (let i = text3.length - 1; i >= 0; i--) {
    const symbol = text3[i];
    reverseText3 += symbol;
}

console.log(`${text3} --> ${reverseText3}`); 