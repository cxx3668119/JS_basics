//     反转一个单链表。
// 示例:
// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

const a = { val: '1' }
const b = { val: '2' }
const c = { val: '3' }
const d = { val: '4' }
const e = { val: '5' }
a.next = b
b.next = c
c.next = d
d.next = e
e.next = null

// let p = a
// while (p) {
//   console.log(p.val);
//   p = p.next
// }

function reverseList(head) {
  let p1 = head;
  let p2 = null
  while (p1) {
    const temp = p1.next
    p1.next = p2
    p1 = temp
    p2 = p1
  }
  return p2
}

reverseList(a)