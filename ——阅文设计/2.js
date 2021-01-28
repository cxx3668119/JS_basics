// 有如下字符串：
// var str = 'CanvasRenderingContext2D';
// 1. 字符串去重，返回新的不重复字符串，假设变量名是str2。
// 2. 字符串反向排列，返回str2的反向排列字符串，假设变量名是str3。
// 3. 返回str3字符串中大写字母的个数。

var str = 'CanvasRenderingContext2D';
let b = [];
str1 = str.split('')

function test1(e) {
  for (let i = 0; i < e.length; i++) {
    for (let j = i + 1; j < e.length; j++) {
      if (e[j] == e[i]) {
        e.splice(j, 1);
        j--;
      }
    }
  }
  str2 = e.join('')
  return str2;
}

console.log(test1(str1));

str3 = test1(str1).split('').reverse().join('')
console.log(str3);

function BigSmall(e) {
  for (let i = 0; i < e.length; i++) {

    let a = e.charAt(i);
    if (a >= 'A' && a <= 'Z') {
      b.push(a)
    }
  }
  return b;
}

console.log(BigSmall(str3).length);