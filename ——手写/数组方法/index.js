const arr = [1, 2, 3, 4, 5, 6]
delete arr[1]
console.log(arr);
console.log(arr[1]);

// 类数组 length
function test() {
  [...arguments].forEach(item => {
    console.log(item);
  })
}
test(1, 2, 3, 4, 5, 6)