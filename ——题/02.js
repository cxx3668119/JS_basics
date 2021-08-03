// const objA = { a: 1 };
// const objB = { b: 2 };
// const arrA = [objA];
// const arrB = [objB];

// const v1 = arrA.concat(arrB);
// const v2 = arrA.concat(...arrB);
// const v3 = arrA.push(arrB);
// const v4 = arrA.push(...arrB);
// console.log(v1);
// console.log(v2);
// console.log(v3);
// console.log(v4);

// [{ a: 1 }, { a: 2 }]
// [{ a: 1 }, { a: 2 }]
// 2
// 3
function Foo() {
  log = function () {
    console.log(1);
  };
  return this;
}
Foo.log = function () {
  console.log(2);
}
Foo.prototype.log = function () {
  console.log(3);
}
var log = function () {
  console.log(4);
}
function log() {
  console.log(5);
}

Foo.log();2
log();4
Foo().log();1
log();1
new Foo.log();2
new Foo().log();3