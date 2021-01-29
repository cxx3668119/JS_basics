// 用户使用 <input type="file"> 上传了一个文件，假设这个文件对象是 file，代码如下所示。

// input.addEventListener('change', function () {
//     let file = event.target.files[0]
// });

// 请问：

// 1. 如何返回这个文件的尺寸大小？



// 2. 假设文件支持大小变量是filesize，filesize这个数值的表示文件大小的字节书，例如2837475字节，哎呀，眼睛又疼了，根本看不出来究竟文件多大，请把字节为单位的尺寸全部使用K, M, G单位表示，规则如下，无论文件多小，都使用K表示，超过1M使用M单位表示，超过1G使用G单位表示，再大的尺寸本题不考虑。

//  filesize就是字节单位的文件尺寸
//  请继续处理...