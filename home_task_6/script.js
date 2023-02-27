
// let array = [1, 2, 3, 4, 5, 6, 7]; // С const не работает
// array = array.filter(
//    function deleteItems(array) {
//       return array != 5
//    }
// ); console
//    .log(array);

//__________________________________________________________

let arr = ['Dog', 4, 'Cat', 6, 8];
// let arr = [4, 6, 4, 6, 4, 6];

const getAverage = (numbers) => {
   let sum = 0;
   for (let i = 0; i < numbers.length; i++) {
      if (isNaN(numbers[i]) === true) { continue }
      else { sum += Number(numbers[i]) }
   }
   return sum / numbers.length;
};

console.log(getAverage(arr));

// _________________________________________________________

// function delLatter(str, latters) {
//    let result = str;
//    for (let latter of latters) {
//       result = result.replaceAll(latter, '');
//    }
//    return result;
// }
// console.log(delLatter('Hello World', ['l', 'd']));
