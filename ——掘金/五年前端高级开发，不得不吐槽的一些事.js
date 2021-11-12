// 有一个[1,2,3,4,4,5,5,6,6,6,7]数组，数组长度100以内，数组内部都是正整数，数组是有序的，数组不会出现空值，问： 如何将数组中重复的元素删除？
let arr = [1, 2, 3, 4, 4, 5, 5, 5, 5, 6, 6, 6, 7]
function demo(arr) {
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i + 1; j < arr.length - 1; j++) {
  //     if (arr[i] === arr[j]) {
  //       arr.splice(j, 1)
  //       j--;
  //     }
  //   }
  // }
  // console.log(arr);
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i])
    }
  }
  console.log(newArr);
}
demo(arr)

axios.get("/system/info").then(res => {
  axios.get("/user/info").then(res => {
    axios.get("/logo").then(res => {
      console.log("终于获取到最终的图片路径");
    })
  })
})

/**你需要先调用A接口获取用户ID/system/info。
你需要根据A接口返回的用户ID来获取一个信息/user/info。
你需要根据信息来获取用户的图片路径/logo。\这个地方的优化怎么做最佳
*/