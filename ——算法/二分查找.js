let arr = [3, 48, 66, 71, 99, 101, 120, 151, 188, 209]

function searching(target) {
  // 起始位置index-start 结束index-end middle中位 element指定元素

  var start = 0, end = arr.length - 1, middle, element
  while (start <= end) {
    middle = Math.floor((start + end) / 2)
    element = arr[middle]
    if (element === target) {
      return middle
    } else if (target < element) {
      end = middle - 1
    } else {
      start = middle + 1
    }
  } return -1

}

console.log(searching(3),
  searching(46),
  searching(48),
  searching(99),
  searching(209),
  searching(151),
  searching(120));