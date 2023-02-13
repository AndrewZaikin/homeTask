
// let array = [1, 2, 3, 4, 5, 6, 7]; // С const не работает
// array = array.filter(
//    function deleteItems(array, item) {
//       return array != 5
//    }
// );
// console.log(array);

//__________________________________________________________

let array = ['Dog', 4, 'Cat', 6];

function average(arr) {
   if +(arr.length === 0)
      return 0;

   let sum = 0;

   for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
   }
   return sum / arr.length;
}


console.log(average(k));