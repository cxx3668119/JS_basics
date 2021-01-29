let arr1 = [23, 131, 421, 21, 23, 13, 421, 23, 131, 421]

// function test(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] == arr[i]) {
//         arr.splice(j, 1);
//         j--;
//       }
//     }
//   }
//   return arr;
// }

function test(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr2.indexOf(arr[i]) === -1) {
      arr2.push(arr[i]);
    }
  }
  return arr2
}

console.log(test(arr1));