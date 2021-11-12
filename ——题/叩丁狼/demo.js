// 给String添加一个trim()方法，去除开头和结尾的空格符号

String.prototype.trim = function (str) {
  return str.replace(/(^\s*)|(\s*$)/g, '');
}

