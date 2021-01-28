// 题目描述
// 1. 请生成一个16位的随机数字；
// 2. 已知一个非空字符串变量 str，请基于 str 生成一个16位的随机数字，也就是不同的 str 值随机数字不同，但是相同的 str 值生成的随机数是一样的。
String(Math.random()).split('.')[1].slice(0, 16);
const seed = function (str) {
  // 变成数值
  let num = str.split('').map(char => char.charCodeAt()).join('');
  // 变成随机数值
  return Math.sin(num).toString().split('.')[1].slice(0, 16);
}

