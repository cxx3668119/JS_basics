// 1、生成10-20之间的随机正整数，不包括数字10-20

// function num() {
//   return Math.floor(Math.random() * 10 + 1);
// }
// (function text() {
//   for (let i = 0; i < 10; i++) {
//     console.log(num());
//   }
// }())

// 2、描述浏览器缓存机制，包括HTTP缓存
// 数据库缓存，CDN缓存，代理服务器缓存，浏览器缓存
// DNS缓存
// 有dns的地方,就有缓存。浏览器、操作系统、Local DNS、根域名服务器，它们都会对DNS结果做一定程度的缓存。
// DNS查询过程如下:

// 首先搜索浏览器自身的DNS缓存,如果存在，则域名解析到此完成。

// 如果浏览器自身的缓存里面没有找到对应的条目，那么会尝试读取操作系统的hosts文件看是否存在对应的映射关系,如果存在，则域名解析到此完成。

// 如果本地hosts文件不存在映射关系，则查找本地DNS服务器(ISP服务器,或者自己手动设置的DNS服务器),如果存在,域名到此解析完成。

// 如果本地DNS服务器还没找到的话,它就会向根服务器发出请求,进行递归查询。
// CDN缓存
// 关于CDN缓存,在浏览器本地缓存失效后,浏览器会向CDN边缘节点发起请求。类似浏览器缓存,CDN边缘节点也存在着一套缓存机制。CDN边缘节点缓存策略因服务商不同而不同，但一般都会遵循http标准协议，通过http响应头中的
// Cache-control: max-age  
// 复制代码的字段来设置CDN边缘节点数据缓存时间。
// 当浏览器向CDN节点请求数据时，CDN节点会判断缓存数据是否过期，若缓存数据并没有过期，则直接将缓存数据返回给客户端；否则，CDN节点就会向服务器发出回源请求，从服务器拉取最新数据，更新本地缓存，并将最新数据返回给客户端。 CDN服务商一般会提供基于文件后缀、目录多个维度来指定CDN缓存时间，为用户提供更精细化的缓存管理。

// 浏览器缓存其实就是浏览器保存通过HTTP获取的所有资源,是浏览器将网络资源存储在本地的一种行为。

// 3、实现一个render(str,parameter)，将str中的占位符parameter用填充测试用例

// const str = "下周一{{people1}}和{{people2}}去游泳"
// render(str,{
//   people1:'小明',
//   people2:'小红'
// })
const str = "下周一{{people1}}和{{people2}}去游泳"
let context = {
  people1: '小明',
  people2: '小红'
}
function render(str, context) {
  return str.replace(/{{(.*?)}}/g, (match, key) => context[key.trim()])
}

console.log(render(str, context));

