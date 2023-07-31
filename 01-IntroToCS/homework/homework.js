'use strict';

function BinarioADecimal(num) {

   var array = num.split("").reverse();
   var numDecimal = 0;

   for (let i = 0; i < array.length; i++) {
      numDecimal += array[i] * (2 ** i);
   }

   return numDecimal;
}

function DecimalABinario(num) {

   var array = [];

   do {
      if (num % 2 === 0) {
         array.unshift(0);
         num = num / 2;
      } else {
         array.unshift(1);
         num = Math.floor(num / 2);
      }
   }  while (num !== 0);

   var numBinario = array.join("");
   
   return numBinario;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
