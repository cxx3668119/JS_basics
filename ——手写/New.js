function myNew(fun, ...args) {
  let obj = {};
  obj.__proto__ = fun.prototype;
  let res = fun.apply(obj, args);
  return res instanceof Object ? res : obj;
}

function Animal(name) {
  this.name = name;
}

let animal = myNew(Animal, 'dog');
console.log(animal.name)  // dog

// function myNew(fun,...args){
//   let obj = {};
//   obj.__proto__= fun.prototype
  //proto每个属性都有的 prototype函数才有的 
  // 构造器的原型 
// }