/**
 * @author :陈新昕
 */
// const arr = [1, 2, 3, 4, 5, 6]
// delete arr[1]
// console.log(arr);
// console.log(arr[1]);

// // 类数组 length
// function test() {
//   [...arguments].forEach(item => {
//     console.log(item);
//   })
// }
// test(1, 2, 3, 4, 5, 6)

// *********************************************************************************************************

// console.log([1, 2, 3, 4, 5, 6].toString());
// console.log([[1, 2, 3], [4, 5, 6]].toString());
// console.log([[[1], [2]], [[3], [4]]].toString());

// *********************************************************************************************************

// console.log('12345'.split(''));

// *********************************************************************************************************

// let arr = [1, 2, 3, 4, 5, 6]

// console.log(arr.push(7));
// console.log(arr.pop());
// console.log(arr.unshift(0));
// console.log(arr.shift());

// console.log(arr.reverse(), arr === arr.reverse())
// console.log(arr.sort(), arr === arr.sort());

// *********************************************************************************************************

// console.log(arr.concat([1, 2]), arr === arr.concat([1, 2]));
// console.log([...arr, 1, 2]);
// console.log([...arr, 1, [2]]);

// *********************************************************************************************************

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));

// *********************************************************************************************************
// ES6
// console.log(arr.includes(2));
// console.log(Array.from('12345'));
// console.log(Array.of(3, 4, 5));
// console.log(arr.fill(6, 0, 2));// x修改的值 （x,y,z） y z起始结束位置

// *********************************************************************************************************

// find findIndex
// 数组遍历的方法
// forEach map every some reduce reduceRight filter keys values entries 
// Find 返回符合条件的第一个值 findIndex 返回符合条件的Index
// console.log(arr.find(e => {
//   return e > 4
// }));

// *********************************************************************************************************

let arr = [1, 2, 3, 4, 5, 6]
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6
}

// Object.keys 对象的键名构成真正的数组
// for (let key of Object.keys(obj)) {
//   console.log(key);
// }
// Object.values 对象的键值对的值 构成真正的数组
// for (let value of Object.values(obj)) {
//   console.log(value);
// }
// Object.entries 对象的键值对构成真正的数组
// for (let [key, value] of Object.entries(obj)) {
//   console.log(key, value);
// }
// 以上都可以通过for of 遍历出来

// *********************************************************************************************************

// map forEach filter some every 所有函数的参数都一样 第一个为回调函数 第二个为this指向上下文 

// reduce

// new Map


// 1、forEach没有返回值 2、第二个参数 this 
// arr.forEach(function (item, index, arr) {
//   console.log(item, index, arr);
// })

// 2、map映射 可以return 第二参数 this
let arr1 = arr.map(function (item, index, arr) {
  console.log(item, index, arr);
  return item * 2
})
console.log(arr1);
