const a = { val: 'a' };
const b = { val: 'b' };
const c = { val: 'c' };
const d = { val: 'd' };

a.next = b;
b.next = c;
c.next = d;

let p = a;
while (p) {
  console.log(p.val);
  p = p.next
}

const e = { val: 'e' };
c.next = e
e.next = d

c.next = d