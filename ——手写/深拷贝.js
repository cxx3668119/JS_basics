function deepclone(obj) {
  if (obj == null) return null;
  if (typeof obj !== "object") return obj;
  let obj1 = new obj.constructor
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      obj1[key] = deepclone(obj[key])
    }
  }
  return obj2
}