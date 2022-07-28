let a = new Map()
a.set('a', 1)
a.set('b', 2)
a.set('c', 3)
console.log(a.keys().next().value);

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.cache = new Map()
    this.max = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.cache.has(key)) {
        let tmp = this.cache.get(key)
        this.cache.delete(key)
        this.cache.set(key, tmp)
        return tmp
    }
    return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.cache.has(key)) {
        this.cache.delete(key)
        this.cache.set(key, value)
    } else if (this.cache.size >= this.max) {
        this.cache.delete(this.cache.keys().next().value)
    }
    this.cache.set(key, value)

};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */