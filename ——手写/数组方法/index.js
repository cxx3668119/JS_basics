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
// let arr1 = arr.map(function (item, index, arr) {
//   console.log(item, index, arr);
//   return item * 2
// })
// console.log(arr1);

// let user = [{
//   'name': 'zhangsan',
//   'age': 18,
//   'sex': 'male'
// }, {
//   'name': 'wangwu',
//   'age': 19,
//   'sex': 'male'
// }, {
//   'name': 'lisi',
//   'age': 18,
//   'sex': 'male'
// }]

// user.map(e => {
//   return e.name
// })
// console.log(user.map(e => {
//   return e.name
// }));

// 3、filter
// 返回布尔值，映射 filter 可以过滤掉数组中的null undefined
// let arr2 = [1, 2, 3, 4, null, undefined, -1]
// console.log(arr.filter((item, index, arr) => {
//   return item > 3
// }));

// console.log(arr.filter((item, index, arr) => {
//   return index > 3
// }));

// console.log(arr2.filter(e => {
//   return e
// }));

// 此处 null == undefined  '' != undefined false != undefined NaN != undefined

// console.log(arr.some((item, index, arr) => {
//   return item % 2 === 0
// }));
// // 有一个就返回true

// console.log(arr.every((item, index, arr) => {
//   return item % 2 === 0
// }));
// 全部符合返回true


// (acc, item, index, arr) acc为累加器
// reduce
// 1、第二个参数为累加器的初始值 
// 求和
// console.log(arr.reduce(function (acc, cur, idx, src) {
//   return acc + cur
// }, 0));
// 2、求数组里对象的和
// let result = 0
// let arr2 = [{ x: 1 }, { x: 2 }, { x: 3 }]
// console.log(arr2.reduce((acc, cur) =>
//   acc + cur.x
//   , result)
// );
// 3、将二维数组转化为一维数组
// let flattened = [[0, 1], [2, 3], [4, 5]]

// console.log(flattened.reduce((acc, cur) =>
//   acc.concat(cur), []
// ));
// 4、数组元素出现的次数
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
// 个人理解：初始一个对象，判断item是否在累加器中，如果在，对象中key为item的值+1 不在的话给其初始值1
// console.log(names.reduce((acc, item) => {
//   if (item in acc) {
//     acc[item]++
//   } else {
//     acc[item] = 1
//   }
//   return acc
// }, {}));

// 5、按属性对object分类
// var people = [
//   { name: 'Alice', age: 21 },
//   { name: 'Max', age: 20 },
//   { name: 'Jane', age: 20 }
// ];

// function demo(arr, key) {
//   return arr.reduce((acc, item) => {
//     let result = item[key]  //item.age
//     if (!acc[result]) {     //添加新对象key名
//       acc[result] = []  //赋值key名的值为空数组
//     }
//     acc[result].push(item)  //添加值  
//     return acc
//   }, {})
// }

// console.log(demo(people, 'age'));

// 6、使用扩展运算符和initialValue绑定包含在对象数组中的数组
// friends - 对象数组
// where object field "books" - list of favorite books
var friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}];

// allbooks - list which will contain all friends' books +
// additional list contained in initialValue
var allbooks = friends.reduce(function (prev, curr) {
  return [...prev, ...curr.books];
}, ['Alphabet']);

// allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]


// 7、数组去重
let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myOrderedArray = myArray.reduce(function (accumulator, currentValue) {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue)
  }
  return accumulator
}, [])

console.log(myOrderedArray)

let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = arr.sort().reduce((init, current) => {
  if (init.length === 0 || init[init.length - 1] !== current) {
    init.push(current);
  }
  return init;
}, []);
console.log(result); //[1,2,3,4,5]

// 8、按顺序运行Promise
function runPromiseInSequence(arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
    Promise.resolve(input)
  );
}

// promise function 1
function p1(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 5);
  });
}

// promise function 2
function p2(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 2);
  });
}

// function 3  - will be wrapped in a resolved promise by .then()
function f3(a) {
  return a * 3;
}

// promise function 4
function p4(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 4);
  });
}

const promiseArr = [p1, p2, f3, p4];
runPromiseInSequence(promiseArr, 10)
  .then(console.log);   // 1200

// 9、使用 reduce实现map
if (!Array.prototype.mapUsingReduce) {
  Array.prototype.mapUsingReduce = function (callback, thisArg) {
    return this.reduce(function (mappedArray, currentValue, index, array) {
      mappedArray[index] = callback.call(thisArg, currentValue, index, array)
      return mappedArray
    }, [])
  }
}

[1, 2, , 3].mapUsingReduce(
  (currentValue, index, array) => currentValue + index + array.length
) // [5, 7, , 10]
