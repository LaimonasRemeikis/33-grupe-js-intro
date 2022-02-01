console.log('---------------');
/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H
patrick feeney => P.F <---- Name converting to inicials */

function abbrevName(name){
    const nam = name.split (' '); 
      return `${nam[0].charAt(0).toUpperCase()}.${nam[1].charAt(0).toUpperCase()}`;
    }
    console.log(abbrevName("Laimonas Remeikis"), "L.R");
    console.log('---------------');

    String.prototype.toAlternatingCase = function () {
        return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('');
        
      }

    console.log("hello world".toAlternatingCase(), "HELLO WORLD");
    console.log("HELLO WORLD".toAlternatingCase(), "hello world");
    console.log("hello WORLD".toAlternatingCase(), "HELLO world");
    console.log("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
    console.log("12345".toAlternatingCase(), "12345");

    console.log('---------------');

   // Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:

    String.prototype.isUpperCase = function() {
        if(this==this.toUpperCase()){
          return true;
        } else{
          return false;
        }
      }

      console.log(''.isUpperCase() !== undefined, 'Must define the prototype isUpperCase')
   console.log('c'.isUpperCase(), false, 'c is not upper case');
   console.log('C'.isUpperCase(), true, 'C is upper case');
   console.log('hello I AM DONALD'.isUpperCase(), false, 'hello I AM DONALD not is upper case');
   console.log('HELLO I AM DONALD'.isUpperCase(), true, 'HELLO I AM DONALD is upper case');
   console.log('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(), false, 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case');
   console.log('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase(), true, 'ACSKLDFJSGSKLDFJSKLDFJ is upper case');

   console.log('---------------');

   //Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

   function removeEveryOther(arr){
    let remove = [];
    for(let i = 0; i<arr.length; i+=2){
      remove.push(arr[i]);
    }
    return remove;
  }



  console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
    console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
    console.log(removeEveryOther([[1, 2]]), [[1, 2]]);
    console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);

    console.log('---------------');