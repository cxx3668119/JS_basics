// 一道编程题 输入console.log("hello".repeatify(3)) 输出hellohellohello
let result = ''
String.prototype.repeatify = function (num) {
  for (let i = 0; i < num; i++) {
    result += this
  }
  return result
}

console.log("hello".repeatify(3))
