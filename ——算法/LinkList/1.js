class LinkNodeList {
    constructor() {
        this.head = null
        this.length = 0
    }
    append (val) {
        let p = this.head

        let node = new Node(val)
        if (this.head) {
            while (p.next) {
                p = p.next
            }
            p.next = node
        } else {
            this.head = node
        }
        this.length++
    }
    print () {
        let p = this.head
        let ret = ''
        if (this.head) {
            do {
                ret += (p.val + '=>')
                p = p.next
            } while (p.next)
            ret += p.val
            console.log(ret);
        } else {
            console.log('empty');
        }
    }
}
class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

let a = new LinkNodeList()

a.append(1)
a.append(2)
a.append(3)
a.append(4)
a.print()