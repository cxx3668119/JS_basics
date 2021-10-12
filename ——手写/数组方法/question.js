// 二位数组中每个数组的最大值组成数组
let arr = [[4, 5, 1, 3], [11, 23, 45, 64], [111, 111, 445, 678], [1000, 1111, 2312, 2345]]

function demo(array) {
  let result = []
  array.forEach(e => {
    result.push(e.sort()[e.length - 1])
  });
  return result
}
console.log(demo(arr));

function demo2(array) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let arr1 = array[i]
    result.push(Math.max(...arr1))
  }
  return result
}

console.log(demo2(arr));

function demo3(array) {

  return array.map(item =>
    Math.max(...item)
  )

}

console.log(demo3(arr));

function demo4(array) {
  return array.map(item => {
    return item.reduce((prev, cur) => {
      return prev < cur ? cur : prev
    })
  })
}

console.log(demo4(arr));

console.log([1, 3, 4, 5].reduce((prev, cur) => {
  console.log('prev:' + prev);
  console.log('cur:' + cur);
  return prev < cur ? cur : prev
}));